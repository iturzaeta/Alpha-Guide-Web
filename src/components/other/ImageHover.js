import React from 'react'
import './ImageHover.css'

const ImageHover = ({size, number, text, onClick}) => {
  return (
    <div className={`parent col-${size}`} onClick={onClick}>
      <div className="w-100 h-100 overflow-hidden shadow-image">
        <div className={`child bg-${number}`}>
          <a href="/"><h3>{text}</h3></a>
        </div>
      </div>
    </div>
  )
}

export default ImageHover