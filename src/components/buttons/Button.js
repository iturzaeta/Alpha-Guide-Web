import React from 'react'
import './Buttons.css'

const Button = ({ href, onClick, weight, text, disabled }) => {

  return(
    <a href={href} onClick={onClick} className={`btn-type-${weight}`}>
      {text}
    </a>
  )

}

export default Button