
import './App.css'
import '../navbar/Navbar.jsx'
import Navbar from "../navbar/Navbar.jsx";
import Hero from "../hero/Hero.jsx";
import AboutMe from "../aboutMe/AboutMe.jsx";

function App() {

  return (
      <div className="bg-black">
          <Navbar />
          <Hero />
          <AboutMe />
      </div>
  )
}

export default App
