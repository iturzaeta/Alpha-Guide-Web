import React from 'react'
import './ImageHover.css'

const ImageHover = ({size, number, text}) => {
  return (
    <div className={`parent col-${size}`} onclick="">
      <div className={`child bg-${number}`}>
        <a href="/"><h3>{text}</h3></a>
      </div>
    </div>
  )
}

export default ImageHover