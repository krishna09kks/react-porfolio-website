import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header id='home'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Krishna Singh</h1>
          <h5 className="text-light">Software Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={me} alt="Krishna" />
          </div>

          <a href="#contact" className='scroll-down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
