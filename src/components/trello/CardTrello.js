import React from 'react'
import './Trello.css'
import TagTrello from './TagTrello'

const CardTrello = ({text}) => {
  return (
      <div className="col-3 card-trello">
        <TagTrello color='blue' text='Maleta'/>
        <p>{text}</p>
      </div>
  )
}

export default CardTrello