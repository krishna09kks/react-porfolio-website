import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section className='about' id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years working experience</small>
            </article>
          </div>

          <p>
            I completed my graduation from Maulana Azad National Institute of Technology, Bhopal in 2021. I joined MPS limited, Noida in July 2021 as software engineer. My skills include C++, MySQL, HTML, CSS, JavaScript, PHP and Drupal 8. I take intrest in landscape photography, and I usually pass my time playing video games or watching movies and TV-series.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
