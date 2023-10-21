import React, { useState } from 'react';
import imageMap from './ImageMap'

export default function Register(){
    const courses = Object.keys(imageMap);
    const [selectedCourse, setSelectedCourse] = useState(sessionStorage.getItem('title'));
    const [imageLink, setImageLink] = useState(imageMap[sessionStorage.getItem('title')]);
    const [showPopup, setShowPopup] = useState(false);

    const initPayload = {
        'name':'',
        'email':'',
        'password':'',
        'country':'',
        'course':selectedCourse,
        'contactNo':'',
    };
    const [payload, setPayload] = useState(initPayload);

    function signUp(){
        const newPayload = {
            'name':document.getElementById('register-name').value,
            'email':document.getElementById('register-email').value,
            'password':document.getElementById('register-password').value,
            'country':document.getElementById('register-country').value,
            'course':selectedCourse,
            'contactNo':document.getElementById('register-number').value,
        };
        setPayload(newPayload);
        setShowPopup(true);
    };


    function courseChange(course) {
        setSelectedCourse(course);
        setImageLink(imageMap[course]);
      };

    const validation = () =>{
        for (let key in payload) {
            if(payload[key]==''){
                return false;
            };
          }
        return true;
    }

    const popupMessage = () =>{
        if(validation()){
            return 'Sign Up Successful!';
        }
        else{
            return "Please populate all fields";
        }
    }



    return (
    <div className="course-container">
        <h1>
        <div class="register-header-box">
            <span class="course-header-text">Welcome!</span>
            <img class="imgT0" src={imageLink}></img> 
        </div>       
      </h1>  
        <br></br>
        <h2>Register below to create your account</h2>
        <div className="App2">
        <h3>Create your own account below</h3>
        <form>
            <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="register-name" />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="register-email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="text" id="register-password" />
            </div>
            <div className="input-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="register-country" />
            </div>
            <div className="input-group">
                <label htmlFor="number">Contact No.</label>
                <input type="text" id="register-number" />
            </div>
            <div className="input-group">
                <label htmlFor="course">Select Course</label>
                <select 
                    className="course-dropdown"
                    value={selectedCourse} 
                    onChange={e => courseChange(e.target.value)}
                    >
                    {courses.map(course => (
                        <option key={course} value={course}>
                        {course}
                        </option>
                    ))}
                </select>
            </div>
            

        </form>
        </div>
        <button type="submit" className="register-btn" onClick={() => signUp()}>Sign Up</button>
        {showPopup && (
            <div className="popup">
                <br></br>
                <div className="popup-inner">
                    <h2>Info</h2>
                    <div>{popupMessage()}</div>
                    <br></br>
                    <br></br>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
                
            </div>
        )}
        
    </div>
)

}