import './pages.css'
import {Link} from 'react-router-dom';
import imageMap from './ImageMap'
export default function Training(){
    return (
        <body class="bodyT">
            <h1>Public & Corporate Training</h1>

            <div className='filterT'>
                <input type='text' id="filter"  />
                <button>Filter</button>
            </div>

            <div class="rowT">
                <h1>Public Training</h1>
            </div>
            <br></br>
            <div class="rowT">
                <h3>Leadership</h3>
            </div>
            <div class="rowT">
            <Link  to="/getcourse/Certified Agile Leadership (CAL1)">
                    <img class="imgT2" src={imageMap["Certified Agile Leadership (CAL1)"]}></img>
            </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scaled Agile 5.0</h3>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Certified SAFe® Agilist">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agilist"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Scrum Master">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Scrum Master"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Product Owner, Product Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Product Owner, Product Manager"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Government Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Government Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Program Consultant">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Program Consultant"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Advanced Scrum Master">
                <img class="imgT2" src = {imageMap["Certified SAFe® Advanced Scrum Master"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® DevOps Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® DevOps Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/SAFe® for Architects">
                    <img class="imgT2" src = {imageMap["SAFe® for Architects"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Release Train Engineer">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Release Train Engineer"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Agile Software Engineer">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agile Software Engineer"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Lean Portfolio Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Lean Portfolio Manager"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Agile Product Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agile Product Manager"]}></img>
                </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scrum.org</h3>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Professional Scrum Master Training">
                    <img class="imgT2" src={imageMap["Professional Scrum Master Training"]}></img>
                </Link>
                <Link to="/getcourse/Professional Scrum Product Owner">
                    <img class="imgT2" src={imageMap["Professional Scrum Product Owner"]}></img>
                </Link>
                <Link to="/getcourse/Professional Scrum Developer">
                    <img class="imgT2" src={imageMap["Professional Scrum Developer"]}></img>
                </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scrum Alliance</h3>
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
            <br></br>

            <div class="rowT">
                <h3>PMI</h3>
            </div> 
            <div class="rowTF"> 
                <Link to="/getcourse/Project Management Professional">
                    <img class="imgT2" src={imageMap["Project Management Professional"]}></img>
                </Link>
                <Link to="/getcourse/PMI Agile Certified Practitioner (PMI-ACP)">
                    <img class="imgT2" src={imageMap["PMI Agile Certified Practitioner (PMI-ACP)"]}></img>
                </Link>
            </div>

            <div class="rowTF">
                <h1>Corporate Training</h1>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Value Stream Corporate Workshop">
                <div class="tbutton">
                    <button class="btnt"><b>Value Stream <br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/SAFe® Portfolio Management">
                <div class="tbutton">
                    <button class="btnt"><b>SAFe® Portfolio<br></br> Management</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Program Increment Workshop (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b> Program Increment<br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Inspect & Adapt (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b>Inspect & <br></br> Adapt</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Product Management Workshop (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b>Product Management<br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Team Building Workshop">
                <div class="tbutton">
                    <button class="btnt"><b>Team <br></br>Building</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Customized Scrum and Kanban Workshop">
                <div class="tbutton">
                    <button class="btnt"><b> Customized <br></br>Scrum/Kanban<br></br>Workshop</b></button>
                </div>
                </Link>

            </div>


    
        </body>
        )

}