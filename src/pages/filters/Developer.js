import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';

export default function Developer(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Developer</h1>
        </div>
        <br></br>
        <div class="rowT">
        <Link to="/getcourse/Certified SAFe® DevOps Practitioner">
            <img class="imgT2" src = {imageMap["Certified SAFe® DevOps Practitioner"]}></img>
        </Link>
        <Link to="/getcourse/Certified SAFe® Agile Software Engineer">
            <img class="imgT2" src = {imageMap["Certified SAFe® Agile Software Engineer"]}></img>
        </Link>
        <Link to="/getcourse/Professional Scrum Developer">
            <img class="imgT2" src={imageMap["Professional Scrum Developer"]}></img>
        </Link>
        <Link to="/getcourse/CSD – Certified Scrum Developer (scrumalliance.org)">
            <img class="imgT2" src={imageMap["CSD – Certified Scrum Developer (scrumalliance.org)"]}></img>
        </Link>
        </div>
        
        
       
        </body>
    )
}