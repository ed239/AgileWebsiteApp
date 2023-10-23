

import HoverMenuButton from "./HoverMenuButton";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" ><img className="logo" src="https://cdn-icons-png.flaticon.com/512/46/46707.png" ></img></Link>
        <ul>
            <CustomLink to="assessment">Assessment</CustomLink>
            <CustomLink to="training"><HoverMenuButton title="Training" /></CustomLink>
            <CustomLink to="coaching">Coaching</CustomLink>
            <CustomLink to="resources">Resources</CustomLink>
            <CustomLink to="newcourses">View Courses</CustomLink>
        </ul>
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