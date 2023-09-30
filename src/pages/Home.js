import "./pages.css"
import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel, { CarouselItem } from "./carousel";
import "./carousel.css"

export default function Home(){
    
    return (
        
        <body class="body">
        <h1>Easy E-Learning</h1>
        <br></br>
        <Carousel>
            <CarouselItem>
                <img src={`https://as2.ftcdn.net/v2/jpg/03/56/04/97/1000_F_356049725_UvW2FSyPH4E0QR0sJX8o3KUKpKSpzswJ.jpg `} />
            </CarouselItem>
            <CarouselItem>
                <img src={`https://as1.ftcdn.net/v2/jpg/02/03/91/56/1000_F_203915680_M7OaU5UgMNF1clfJuTeXpaS4yxcpQ1Gc.jpg`} />
            </CarouselItem>
            <CarouselItem>
                <img src={`https://as1.ftcdn.net/v2/jpg/06/29/94/90/1000_F_629949028_PbhYMp1SkR2br6k4lYfuLZbBvSldqXbW.jpg`} />
            </CarouselItem>
            <CarouselItem>
                <img src={`https://t4.ftcdn.net/jpg/04/27/12/37/360_F_427123735_IIZzdoLNE1NUoO7HaO9NvNahiUulROcZ.jpg`} />
            </CarouselItem>
        </Carousel>
        <br></br>
        <br></br>
        <h1>Our Services</h1>
        <br></br>
        <br></br>

        <div class='some-page-wrapper'>
            <div class='row'>
                <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Assessment</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/book-icon/book-stack-icon--icon-search-engine-16.png'></img>
                    <br></br>
                    <br></br>
                    <p> Apex agile experts can perform an Agile Maturity Assessment for your company. We thoroughly
                        study your business organization and measure how the software development practices you
                        follow conform to the <a href="https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/">Agile Manifesto's 12 Agile Principles.</a> 
                    </p>
                </div>
                </div>
                <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Coaching</h2>
                    <br></br>
                    <img class='colImg' src='https://freepngimg.com/save/29395-analyst-photos/512x512'></img>
                    <br></br>
                    <br></br>
                    <p>Working one on one with your own technology leaders, Apex experts share our decades of Agile  expertise,
                     with just the right level of sensitivity and suitability for your business needs. </p>
                </div>
                </div>
                    <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Courses</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/laptop-icon/laptop-icon-24.png'></img>
                    <br></br>
                    <br></br>
                    <p>Apex coursework will thoroughly prepare you for Agile certification. Having worked side-by side with the three 
                    elite certification agencies, we know just what you will need to gain  certification from the three important certification organizations SAFe, Scrum.org, and Scrum  Alliance.</p>
                </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>

        <div class='some-page-wrapper'>
            <div class='row2'>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <br></br>
                    <h1>About Us</h1>
                    <br></br>
                    <br></br>
                    <p> Apex is a boutique Agile consultancy with decades of software development experience. We  grew up in the era of structured design 
                    methodologies, adapted our learning to the rapid  development approaches, and graduated to Agile. Wherever you are in your software evolution,  
                    we are there to help in your journey.
                    </p>
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <br></br>
                    <img class='aboutImg' src='https://as1.ftcdn.net/v2/jpg/01/77/91/20/1000_F_177912003_ncVNX7GxPR6Z2NYcHvJTGPbrD26BcVKF.jpg'></img>
                </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Our Partners</h1>
        <br></br>
        <div class='some-page-wrapper'>
            <div class='row2'>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>SAFe</h3>
                    <br></br>
                    <img class='partnerImg' src='https://images.credly.com/images/7a30a2e5-82bb-406b-b0f8-52fd846eac69/linkedin_thumb_cert_mark_SSM_badge_large_300px.png'></img>
                    <br></br>
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>Scrum Alliance</h3>
                    <br></br>
                    <img class='partnerImg' src='https://theme.zdassets.com/theme_assets/67158/c28adb2e3532619ebc9a9072599677f56ebee94b.png'></img>
                    <br></br>
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>Scrum.org</h3>
                    <br></br>
                    <img class='partnerImg' src='https://devon.global/wp-content/uploads/2018/11/scrumorg-logo.png'></img>
                    <br></br>
                </div>
                </div>
            </div>
        </div>
        
        
        

       </body>
    )
}