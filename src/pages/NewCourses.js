import './pages.css'
import './calender.css'
import imageMap from './ImageMap'
import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

export default function Assessment(){
        const navigate = useNavigate();
        const fullURL = 'http://localhost:5000/authentication-swagger/v1/all-courses-detail';
        const [course, setCourse] = useState(null);
        const [loading, setLoading] = useState(true);
      
        if(loading){
          console.log("making request");
          fetch(fullURL, {
            method: 'GET',
            headers: {
              'accept': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            setCourse(data);
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching course info:", error);
            setLoading(false);
          });
        }

      
        if (loading) return (<div>Loading...</div>);
      

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
                        <p class="textU2"><b>Course Name: {course[0].Title}</b></p>
                        <p class="textU2"><b>Location : {course[0].City}, {course[0].Country}</b></p>
                        <p class="textU2"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Nov</b></p>
                        <p class="textC"><b>24</b></p>
                    </div>
                    <div class="content">
                        <p class="textU2"><b>Course Name: {course[1].Title}</b></p>
                        <p class="textU2"><b>Location : {course[1].City}, {course[1].Country}</b></p>
                        <p class="textU2"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Dec</b></p>
                        <p class="textC"><b>05</b></p>
                    </div>
                    <div class="content">
                        <p class="textU2"><b>Course Name: {course[2].Title}</b></p>
                        <p class="textU2"><b>Location : {course[2].City}, {course[2].Country}</b></p>
                        <p class="textU2"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Dec</b></p>
                        <p class="textC"><b>19</b></p>
                    </div>
                    <div class="content">
                        <p class="textU2"><b>Course Name: {course[3].Title}</b></p>
                        <p class="textU2"><b>Location : {course[3].City}, {course[3].Country}</b></p>
                        <p class="textU2"><b>Instructor: Raj Heda</b></p>
                    </div>
                </div>
                <div class="rectangle">
                    <div class="square">
                        <p class="textU"><b>Jan</b></p>
                        <p class="textC"><b>10</b></p>
                    </div>
                    <div class="content">
                        <p class="textU2"><b>Course Name: {course[4].Title}</b></p>
                        <p class="textU2"><b>Location : {course[4].City}, {course[4].Country}</b></p>
                        <p class="textU2"><b>Instructor: Raj Heda</b></p>
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