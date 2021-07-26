import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from '../ServicesItem'

import './DropDown.css'

const DropDown = () => {
  const [click, setClick] = useState(false)
  return (
    <ul
      onClick={() => setClick(!click)}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              onClick={() => setClick(false)}
              to={item.path}
              className={item.cName}
            >
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DropDown
