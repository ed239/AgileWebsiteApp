import React, { useState } from 'react';

function AllCourses() {
  const [courses, setCourses] = useState([]);

//Example with error handling
  const fetchCourses = () => {
    fetch('http://localhost:5000/authentication-swagger/v1/all-courses', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch courses');
      }
      return response.json();
    })
    .then(data => setCourses(data))
    .catch(error => console.error('Error fetching courses:', error));
  };


//Test rendering
  return (
    <div>
      <button onClick={fetchCourses}>Load Courses</button>
      
      <div id="mylist">
        {courses.map((course, index) => (
          <div key={index}>{course}</div> 
        ))}
      </div>
    </div>
  );
}

export default AllCourses;