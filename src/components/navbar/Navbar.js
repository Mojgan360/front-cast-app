import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuffer } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

import logo from '../../images/logo.png'

import Dropdown from './dropDwon/DropDown'
import Button from './button/Button'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) return setDropdown(false)
    return setDropdown(true)
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(true)
    // }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) return setDropdown(false)
    return setDropdown(false)
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(false)
    // }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* FronFun */}
          <img src={logo} alt='' className='logo' />
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div style={{ marginRight: '20px' }}>
          <Button />
        </div>
      </nav>
    </>
  )
}

export default Navbar
