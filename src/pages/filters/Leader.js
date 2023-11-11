import './filter.css';
import {Link} from 'react-router-dom';
import imageMap from '../ImageMap.js';
export default function Leader(){

    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Leader</h1>
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