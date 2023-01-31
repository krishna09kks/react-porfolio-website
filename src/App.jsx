import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Conact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Nav />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Conact />
      <Footer />
    </div>
  )
}

export default App
