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
                    <h2>Courses</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/book-icon/book-stack-icon--icon-search-engine-16.png'></img>
                    <br></br>
                    <br></br>
                    <p> Info about courses</p>
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
                </div>
                </div>
                    <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Training</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/laptop-icon/laptop-icon-24.png'></img>
                    <br></br>
                    <br></br>
                </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <h1>About Us</h1>
        <br></br>
        <br></br>

        
        <div class="aboutUsS" >
            <div class = "rowS"><b>Courses</b></div>
            <div class = "rowS"><b>Coaching</b></div>
            <div class = "rowS"><b>Training</b></div>
            <p class ="ts"> Our classes are about.....</p>
        </div>

        

       </body>
    )
}