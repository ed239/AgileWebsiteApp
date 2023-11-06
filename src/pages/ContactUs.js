import './pages.css'
import pic5 from "./images/5.jpeg";
import FormControl from '@mui/material/FormControl';

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
                    <label>Name</label>
                    <input type='text' id="name" name='name'/>
                    <label>Email Address</label>
                    <input type='email' id="email-address" name='email'/>
                    <label>Phone</label>
                    <input type='tel' id="phone-number" name='phone'/>
                    <label>What can we help you with?</label>
                    <textarea id="message" name="message" rows="8" cols="60" />
                </FormControl>
              </div>
            </div>

        </div>
    )
    


}
