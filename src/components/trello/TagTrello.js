import React from 'react'
import './Trello.css'

const TagTrello = ({color, text}) => {
  return (
    <div>
      <div className={`tag tag-${color}`}>
        {text} <i class="ri-close-line"></i>
      </div>
    </div>
  )
}

export default TagTrello