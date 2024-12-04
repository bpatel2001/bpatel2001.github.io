import Navbar from './components/Navbar'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className ="overflow-x-hidden antialiased">
      <div classNam="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-blue-900"></div>
      </div>
      <div className="container mx-auto max-w-full h-screen">
        <Navbar />
        <Landing />
        <AboutMe />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
