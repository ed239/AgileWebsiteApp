import './pages.css'
import './calender.css'

export default function Assessment(){

    return (
    <body class="body">
        <h1>Upcoming Courses</h1>
        <br></br>
        <br></br>
        
        <div className="row">
            <div className="c1">
            <br></br>
                <h3>Filters</h3>
                <div class="NCFbutton">
                    <button class="btnncf">All Courses</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">All Course Type</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">Calendar</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">All Countries</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">City</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">All Trainers</button>
                </div>
                <div class="NCFbutton">
                    <button class="btnncf">All Partners</button>
                </div>
                <div class="NCFbuttonClear">
                    <button class="btnncfClear"><b>Clear Filters</b></button>
                </div>
            </div>
            <div className="c2">
                <h1>Calendar</h1>
                <br></br>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Nov</b></p>
                        <p class="textC"><b>03</b></p>
                    </div>
                    <div class="content">
                        <p class="textU"><b>Course Name: Certified Agile Leadership (CAL1)</b></p>
                        <p class="textU"><b>Location : Boston, USA</b></p>
                        <p class="textU"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Nov</b></p>
                        <p class="textC"><b>24</b></p>
                    </div>
                    <div class="content">
                        <p class="textU"><b>Course Name: Certified SAFe® Agilist</b></p>
                        <p class="textU"><b>Location : New York, USA</b></p>
                        <p class="textU"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Dec</b></p>
                        <p class="textC"><b>05</b></p>
                    </div>
                    <div class="content">
                        <p class="textU"><b>Course Name: Certified SAFe® Scrum Master</b></p>
                        <p class="textU"><b>Location : Boston, USA</b></p>
                        <p class="textU"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Dec</b></p>
                        <p class="textC"><b>19</b></p>
                    </div>
                    <div class="content">
                        <p class="textU"><b>Course Name: Certified SAFe® Agile Product Manager</b></p>
                        <p class="textU"><b>Location : New York, USA</b></p>
                        <p class="textU"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Jan</b></p>
                        <p class="textC"><b>10</b></p>
                    </div>
                    <div class="content">
                        <p class="textU"><b>Course Name: Certified SAFe® Program Consultant</b></p>
                        <p class="textU"><b>Location : Boston, USA</b></p>
                        <p class="textU"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <br></br>


            </div>
            <br></br>
        </div>
        <br></br>
        <br></br>


    </body>
    )

}