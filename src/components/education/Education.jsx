import React from 'react'
import './education.css'
import { FaSchool } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education">
      <h5>Where I Have Studied</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education__content">
          <div className="education__college">
            <FaSchool className='education__icon'/>
            <div>
              <h3>Maulana Azad National Institute Of Technology, Bhopal</h3>
              <small className='education__degree'>Bachelor Of Technology (Electrical Engineering)</small>
              <div className="education__marks">
                <small>
                  <b>CGPA: </b>7.80
                </small>
              </div>
            </div>
          </div>
          <div className="education__duration">August 2017 - May 2021</div>
        </div>

        <div className="education__content">
          <div className="education__college">
            <FaSchool className='education__icon'/>
            <div>
              <h3>G. N. National Public School</h3>
              <small className='education__degree'>HSC</small>
              <div className="education__marks">
                <small>
                  <b>Percentage: </b>89.20%
                </small>
              </div>
            </div>
          </div>
          <div className="education__duration">June 2014 - April 2016</div>
        </div>

        <div className="education__content">
          <div className="education__college">
            <FaSchool className='education__icon'/>
            <div>
              <h3>N. S. Children Academy, Gorakhpur</h3>
              <small className='education__degree'>SSC</small>
              <div className="education__marks">
                <small>
                  <b>CGPA: </b>9.4
                </small>
              </div>
            </div>
          </div>
          <div className="education__duration">June 2012 - March 2014</div>
        </div>
      </div>
    </section>
  )
}

export default Education
