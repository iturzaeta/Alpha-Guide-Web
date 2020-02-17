import React from 'react'
import './Buttons.css'

const Button = ({ type, text }) => {

  return(
    <a href="/" className={`btn-type-${type}`}>
      {text}
    </a>
  )

}

export default Button