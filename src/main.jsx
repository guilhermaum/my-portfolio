import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    <main>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </main>

  </StrictMode>,
)
