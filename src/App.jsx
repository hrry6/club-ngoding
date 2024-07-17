import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/about/About"
import Galery from "./components/Galery"
import Mentors from "./components/mentors/Mentors"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Galery/>
        <Mentors/>
        <Footer/>
    </div>
  )
}

export default App
