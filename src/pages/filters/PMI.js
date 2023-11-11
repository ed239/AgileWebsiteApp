import './filter.css';
import {Link} from 'react-router-dom';
import imageMap from '../ImageMap.js';
export default function PMI(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>PMI</h1>
            </div> 
            <div class="rowTF"> 
                <Link to="/getcourse/Project Management Professional">
                    <img class="imgT2" src={imageMap["Project Management Professional"]}></img>
                </Link>
                <Link to="/getcourse/PMI Agile Certified Practitioner (PMI-ACP)">
                    <img class="imgT2" src={imageMap["PMI Agile Certified Practitioner (PMI-ACP)"]}></img>
                </Link>
            </div>
       
        </body>
    )
    }