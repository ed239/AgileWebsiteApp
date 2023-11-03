import './pages.css'
import './calender.css'
import imageMap from './ImageMap'
import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

export default function Assessment(){
        const navigate = useNavigate();
        const fullURL = 'http://localhost:5000/authentication-swagger/v1/all-courses-detail';
        const [courses, setCourses] = useState(null);
        const [selectedCourses, setSelectedCourses] = useState(null);
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
            setCourses(data);
            setSelectedCourses(data);
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching course info:", error);
            setLoading(false);
          });
        }

      
        if (loading) return (<div>Loading...</div>);

        const formatMonth = (dateStr) => {
            // take in date string like "2023-09-03" and return "Sep"
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', { month: 'short'});
          };

        const formatDate = (dateStr) => {
            // take in date string like "2023-09-03" and return "03"
            const date = new Date(dateStr);
            const day = date.getDate();
            return day < 10 ? `0${day}` : day.toString();
          };

        function redirectCourse(title){
            navigate('/getcourse/'+title);
        };

        function filter(field, value){
            //example for filter on city
            if(field==='City'){
                const filtered = courses.filter(course => course.City === value);
                setSelectedCourses(filtered);
            }
            //for more complicated filter like date, might need to use a loop
        }
      

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
            <div className="scroll-container">
                <h1>Calendar</h1>
                <br></br>
                {selectedCourses.map((detail, index) => (
                    <div class="rectangle" onClick={() => redirectCourse(detail.Title)}>
                        <div class="square">
                            <p class="textU"><b>{formatMonth(detail.StartDate)}</b></p>
                            <p class="textC"><b>{formatDate(detail.StartDate)}</b></p>
                        </div>
                        <div class="content">
                            <p class="textU2" id="course-name"><b>Course Name: {detail.Title}</b></p>
                            <p class="textU2"><b>Location : {detail.City}, {detail.Country}</b></p>
                            <p class="textU2"><b>Instructor: Raj Heda</b></p>
                        </div>
                    </div>
                ))}
                
                <br></br>
            </div>
            <br></br>
        </div>
        <br></br>
        <br></br>


    </body>
    )
}

