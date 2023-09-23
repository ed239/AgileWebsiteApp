from fastapi_camelcase import CamelModel as BaseModel


class AuthSchema(BaseModel):
    email: str
    password: str


