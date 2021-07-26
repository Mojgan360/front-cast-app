import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuffer } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

import DrowpDown from './dropDwon/DropDown'
import Button from './button/Button'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [drowpDown, setDrowpDown] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        FrontFun
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBuffer />}
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
            About us
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
            <span>
              <FaAngleDown />
            </span>
            {drowpDown && <DrowpDown />}
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  )
}

export default Navbar
