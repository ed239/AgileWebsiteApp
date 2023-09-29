import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    
    return <nav className="foot">
        <div id="grid">
        
        <Link to="/" className="foot-title">Logo</Link>
        <ul>
            <CustomLink to="aboutus">About Us</CustomLink>
            <CustomLink to="contactus">Contact Us</CustomLink>
            <CustomLink to="becometrainer">Become a Trainer</CustomLink>
            <CustomLink to="terms">Terms & Conditions</CustomLink>
        </ul>
        
        <ul id="socials">
            <h4>Follow us on:</h4>
            <br></br>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </ul>
        </div>
    </nav>
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end : true})
    return (
        <li className={isActive ? "active" : ""}>
                <Link to={ to }{...props}>{children}</Link>
        </li>
    )

}