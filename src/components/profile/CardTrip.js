import React from 'react'
import './Profile.css'

const CardTrip = (props) => {
  return (
    <div className="col-4 my-card">
      <div className="v-100 h-100 overflow-hidden inside-card">
        <img src={props.img} alt="" />
        <div>
          <div className="d-flex pl-3 pr-3 justify-content-between">
            <h5 className="yellow pt-3">{props.destiny}</h5>
            <h5 className="yellow pt-3">{props.days}</h5>
          </div>
          <p className="pl-3">{props.dates}</p>
          <p className="pl-3">{props.km}</p>
        </div>
      </div>
    </div>
  )
}

export default CardTrip