import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = () => {
  return (
    <Link to='/'>
      <button className='btn'>Sign Up</button>
    </Link>
  )
}

export default Button
