import logging
import os
from importlib import import_module
from app.config.Config import settings, module_dir
from fastapi import APIRouter, Depends, status
from app.schema.AuthSchema import AuthSchema, SignupSchema
from app.controller.DBConn import mydb
from app.controller.ClsPasswordHandler import PasswordHandler
from app.controller.ClsTokenHandler import TokenHandler
from app.util.ClsJwtBearer import JWTBearer, get_token_user

log = logging.getLogger("asyncio")
router = APIRouter()


def _get_module(scripts_dir, script_name):
    scripts_path = os.path.join(module_dir, scripts_dir)
    file_name = f"{script_name}.py"
    if file_name not in os.listdir(scripts_path):
        raise ModuleNotFoundError
    return import_module(f"app.{scripts_dir}.{script_name}")


def get_collection(db):
    collections = db.list_collection_names()
    return collections


@router.post(
    "/Sign Up",
    summary="Sign Up",
    description="Sign Up",
    status_code=status.HTTP_201_CREATED,
)
def sign_up(schema: SignupSchema):
    log.info("Starting Sign up")

    password_handler = PasswordHandler(schema.email.lower(), schema.password, mydb)
    result = password_handler.sign_up(schema.Role)

    log.info("Server.sign_up finished!")
    return result


@router.post(
    "/Log in",
    summary="Log in",
    description="Log in",
    status_code=status.HTTP_201_CREATED,
)
def log_in(schema: AuthSchema):
    log.info("Starting Log in")

    password_handler = PasswordHandler(schema.email.lower(), schema.password, mydb)
    result = password_handler.log_in()

    log.info("Server.log_in finished!")
    return result


@router.post(
    "/Token",
    summary="Token",
    description="Token",
    status_code=status.HTTP_201_CREATED,
)
def get_token(schema: AuthSchema):
    log.info("getting token")

    token_handler = TokenHandler(schema.email.lower(), schema.password, mydb)
    token = token_handler.signJWT()

    log.info("Server.get_token finished!")
    return token

@router.get(
    "/Get Roles",
    dependencies=[Depends(JWTBearer())],
    summary="Get All Roles",
    description="Get All Roles",
    status_code=status.HTTP_201_CREATED,
)
def get_user_roles(token=Depends((JWTBearer()))):
    log.info("Getting Bets")
    user = get_token_user(token)

    log.info("Server.get_all_bets finished!")
    return user
