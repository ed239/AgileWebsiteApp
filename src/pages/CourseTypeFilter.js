import './pages.css';
import {Link} from 'react-router-dom';
import imageMap from './ImageMap';

export default function CourseTypeFilter(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Product Owner</h1>
            </div>
            <br></br>
        <div class="rowT">
             <Link to="/getcourse/Certified SAFe® Product Owner, Product Manager">
                <img class="imgT2" src = {imageMap["Certified SAFe® Product Owner, Product Manager"]}></img>
            </Link>
            <Link to="/getcourse/Certified SAFe® Agile Product Manager">
                <img class="imgT2" src = {imageMap["Certified SAFe® Agile Product Manager"]}></img>
            </Link>
            <Link to="/getcourse/Professional Scrum Product Owner">
                <img class="imgT2" src={imageMap["Professional Scrum Product Owner"]}></img>
            </Link>
            <Link to="/getcourse/CSPO - Certified Scrum Product Owner">
                <img class="imgT2" src={imageMap["CSPO - Certified Scrum Product Owner"]}></img>
            </Link>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br>
        </body>


    )


}