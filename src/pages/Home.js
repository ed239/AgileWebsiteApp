import "./pages.css"
export default function Home(){
    return (
        <body class="body">
         {/* <h1>E-Learning Services</h1>
         <h2>About Us</h2>
         <h2>Assessment</h2>
         <h2>Courses</h2>
         <h2>Coaching</h2> */}
         <div class="row0" >
            <h1>Easy E-Learning</h1>
         </div>
         <div class="row1">
            <div class="column"><b>About Us</b></div>
            <div class="column1"><b>Assessment</b></div>
        </div>
        <div class="row2">
            <div class="column2"><b>Courses</b></div>
            <div class="column3"><b>Coaching</b></div>
        </div>
        <h1>Our Services</h1>

    
        <div id="grid">
            <div class="textc"><b>Courses</b></div>
            <div class="textc"><b>Coaching</b></div>
            <div class="textc"><b>Training</b></div>
        </div>

        <div id="grid">
            <p id="coursesText">We offer a variety of technical and business courses...</p>
            <p id="coursesText">Specialists are available at your convenience to aid in learning...</p>
            <p id="coursesText">Our courses range from beginner to advanced levels in order to provide the levels
            of knowledge you are seeking...</p>
        </div>

        <h1>About Us</h1>

        
        <div class="aboutUsS" >
            <div class = "rowS"><b>Courses</b></div>
            <div class = "rowS"><b>Coaching</b></div>
            <div class = "rowS"><b>Training</b></div>
            <p class ="ts"> Our classes are about.....</p>
        </div>



       </body>
    )
}