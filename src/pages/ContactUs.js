import './pages.css'
import pic5 from "./images/5.jpeg";
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';



export default function ContactUs(){

    return (
        <div className="contact-box">
            <h1>Easy E-Learning</h1>
           
            <div className='contactus-main'>
              <div>
                 <img src={pic5} alt='contact-us image' width='550px'/>
              </div>
              <div>
                <FormControl variant='standard' className='cnt-form'>
                    <h2>Contact Us</h2>
                    <label>Name</label>
                    <input type='text' id="name" name='name'/>
                    <label>Email Address</label>
                    <input type='email' id="email-address" name='email'/>
                    <label>Phone</label>
                    <input type='tel' id="phone-number" name='phone'/>
                    <label>What can we help you with?</label>
                    <textarea id="message" name="message" rows="8" cols="60" />

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                    {showPopup && (
                        <div className="popup">
                            <br></br>
                            <div className="popup-inner">
                                <h2>Info</h2>
                                <div>{ValidationResult()}</div>
                                <br></br>
                                <br></br>
                                <button onClick={() => ClosePopup()}>Close</button>
                            </div>
                            
                        </div>
                    )}
                </FormControl>
              </div>
            </div>

        </div>
    )
}

