import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assest/logo.png'
import align from '../assest/align.svg'
const Navbar = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false)

  const boxVisiblehandler = () => {}
  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <li className='nav-logo'>
            <img src={logo} alt='logo' />
          </li>

          <button className='align' onClick={boxVisiblehandler}>
            <img src={align} alt='align' />
          </button>
        </div>

        <div className={isBoxVisible ? 'show-links ' : 'nav-links'}>
          <li href='#' className='nav-link'>
            about us
          </li>
          <li href='#' className='nav-link'>
            tag1
          </li>
          <li href='#' className='nav-link'>
            tag2
          </li>
          <button>
            <li href='#' className='nav-link'>
              contact us
            </li>
          </button>
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    max-width: 1000px;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    display: flex;
    align-items: center;
  }
  .nav-logo img {
    width: 200px;
    height: 70px;
  }
  .align {
    width: 40px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 0px;
    overflow: hidden;
  }
  .show-links {
    margin-top: 20px;
    height: 120px;
  }
`
