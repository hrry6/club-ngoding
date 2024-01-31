import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Galery from "./components/Galery"
import Mentors from "./components/Mentors"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <div className="px-[4rem] pt-[2rem] container m-auto">
        <Navbar/>
        <Hero/>
        <About/>
        <Galery/>
        <Mentors/>
      </div>
        <Footer/>
    </div>
  )
}

export default App
