import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function GetCourse() {
  const { courseName } = useParams();
  const encodedCourse = encodeURIComponent(courseName);
  const fullURL = 'http://localhost:5000/authentication-swagger/v1/get-course-info?course=' + encodedCourse;
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
    <div>      
      <div>
      <h1>{course.Title}</h1>
      <p>About This Course: {course["About This Course"]}</p>
      <p>Effort/Duration: {course["Effort/Duration"]} days</p>
      <p>Cost: ${course["Cost"]}</p>
      <p>What you learn: {course["What You’ll Learn"]}</p>

      <h2>Training Overview</h2>
      <ul>
        {course["Training Overview"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>


      <h2>Instructors</h2>
      <ul>
        {course["Meet the Instructors"].map((instructor, index) => (
          <li key={index}>-{instructor}</li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {course["Reviews"].map((review, index) => (
          <li key={index}>{'\u2B24'}{review}</li>
        ))}
      </ul>

      
    </div>
    </div>
  );
}

export default GetCourse;