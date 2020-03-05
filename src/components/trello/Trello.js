import React from 'react'
import './Trello.css'
import ToDo from '../../assets/img/todo.svg'
import CardTrello from './CardTrello'

const Trello = () => {
  return (
    <div className="col-12"> 
      <div className="trello-board">
        <img src={ToDo} alt="" className="image-height" />
        <h5 className="yellow text-center">Your tasks</h5>
        <div className="d-flex flex-row justify-content-around text-center">
          <h6 className="col-3">To do</h6>
          <h6 className="col-3">Doing</h6>
          <h6 className="col-3">Done</h6>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <CardTrello text='Take a swimsuit' />
          <CardTrello text='Photocopy documentation' />
          <CardTrello text='Take phone charger' />
          
        </div>
      </div>
    </div>
   
  )
}

export default Trello