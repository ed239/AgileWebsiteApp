import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';

export default function Scrumalliance(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Scrum Alliance</h1>
            </div>
            <div class="rowT">
                <Link to="/getcourse/CSM – Certified ScrumMaster® (scrumalliance.org)">
                    <img class="imgT2" src={imageMap["CSM – Certified ScrumMaster® (scrumalliance.org)"]}></img>
                </Link>                
                <Link to="/getcourse/CSPO - Certified Scrum Product Owner">
                    <img class="imgT2" src={imageMap["CSPO - Certified Scrum Product Owner"]}></img>
                </Link>
                <Link to="/getcourse/CSD – Certified Scrum Developer (scrumalliance.org)">
                    <img class="imgT2" src={imageMap["CSD – Certified Scrum Developer (scrumalliance.org)"]}></img>
                </Link>
            </div>
        
        
       
        </body>
    )
}