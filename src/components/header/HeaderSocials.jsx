import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
      <a href="https://www.linkedin.com/in/krishna-singh-7b3402170/"><AiFillLinkedin /></a>
        <a href="https://github.com/krishna09kks"><AiFillGithub /></a>
        <a href="https://www.instagram.com/krishna09kks/"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/krishna09kks/"><AiFillFacebook /></a>
      </div>
    </div>
  )
}

export default HeaderSocials
