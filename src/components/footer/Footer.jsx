import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KRISHNA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/krishna-singh-7b3402170/"><AiFillLinkedin /></a>
        <a href="https://github.com/krishna09kks"><AiFillGithub /></a>
        <a href="https://www.instagram.com/krishna09kks/"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/krishna09kks/"><AiFillFacebook /></a>
      </div>

      <div className="footer__message">
        <p>Thank you for visiting!</p>
      </div>
    </footer>
  )
}

export default Footer
