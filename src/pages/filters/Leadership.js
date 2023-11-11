import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';

export default function Leadership(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Leadership</h1>
        </div>
        <br></br>
        <div class="rowT">
            <Link  to="/getcourse/Certified Agile Leadership (CAL1)">
                    <img class="imgT2" src={imageMap["Certified Agile Leadership (CAL1)"]}></img>
            </Link>
        </div>
        
        
       
        </body>
    )
}