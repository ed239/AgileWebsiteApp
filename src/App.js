import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import Home  from './pages/Home';
import Assessment from './pages/Assessment';
import Training from './pages/Training';
import Coaching from './pages/Coaching';
import Resources from './pages/Resources';
import { Route, Routes} from "react-router-dom"

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
          <Route path="/resources" element={<Resources />} />
        </Routes>
      
      </div>
    </>
  

  )
}

export default App;
