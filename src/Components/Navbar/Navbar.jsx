import React, { useState } from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import logo from '../../Assets/logo.png'
import { CgMenuGridO } from 'react-icons/cg'

const Navbar = () => {
  const [active, setActive] = useState('nav-menu')
  const showMenu = () => {
    setActive('nav-menu showMenu')
  }
  const removeMenu = () => {
    setActive('nav-menu')
  }

  const [nobg, setBg] = useState('navbar-two')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setBg('navbar-two navbar-Bg')
    } else {
      setBg('navbar-two')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <div className="navbar flex">
      <div className="navbar-one flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support '
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={nobg}>
        <div className="logo">
          <img src={logo} className="logo-image" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeMenu} className="list-item">
              Home
            </li>
            <li onClick={removeMenu} className="list-item">
              About
            </li>
            <li onClick={removeMenu} className="list-item">
              Offers
            </li>
            <li onClick={removeMenu} className="list-item">
              Seats
            </li>
            <li onClick={removeMenu} className="list-item">
              Destinations
            </li>
          </ul>

          <button onClick={removeMenu} className="btn btnone">
            Contact
          </button>
        </div>
        <button className="btn btntwo">Contact</button>
        <div onClick={showMenu} className="toggle-icon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
