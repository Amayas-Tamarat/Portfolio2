
import './App.css'
import '../navbar/Navbar.jsx'
import Navbar from "../navbar/Navbar.jsx";
import Hero from "../hero/Hero.jsx";
import AboutMe from "../aboutMe/AboutMe.jsx";
import ProfessionalExp from "../professionalExp/ProfessionalExp.jsx";
import Project from "../project/Project.jsx";
import Footer from "../footer/Footer.jsx";

function App() {

  return (
      <div className="bg-black">
          <Navbar />
          <Hero />
          <AboutMe />
          <ProfessionalExp />
          <Project />
          <Footer />
      </div>
  )
}

export default App
