import logo from './logo.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import Home  from './pages/Home';
import Assessment from './pages/Assessment';
import Training from './pages/Training';
import Coaching from './pages/Coaching';
import AboutUs from './pages/AboutUs';
import BecomeTrainer from './pages/BecomeTrainer';
import ContactUs from './pages/ContactUs'
import Terms from './pages/Terms'
import Register from './pages/Register'
import NewCourses from './pages/NewCourses'
//request samples
import GetCourse from './pages/GetCourse'
import Login from './pages/Login';

import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> save.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return ( 
    <>
      <Navbar />
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/training" element={<Training />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/newcourses" element={<NewCourses />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/becometrainer" element={<BecomeTrainer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/getCourse/:courseName" element={<GetCourse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
      </div>
    </>
  

  )
}

export default App;
