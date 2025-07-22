
import './App.css'
import '../navbar/Navbar.jsx'
import Navbar from "../navbar/Navbar.jsx";
import Hero from "../hero/Hero.jsx";
import AboutMe from "../aboutMe/AboutMe.jsx";
import ProfessionalExp from "../professionalExp/ProfessionalExp.jsx";

function App() {

  return (
      <div className="bg-black">
          <Navbar />
          <Hero />
          <AboutMe />
          <ProfessionalExp />
      </div>
  )
}

export default App
