import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const CardTrip = (props) => {

  return (
    <Link to={`/trip/${props.id}`}>
      <div className="col-4 my-card">
        <div className="w-100 h-100 overflow-hidden inside-mytrip">
          <img src={props.img} alt="" className="w-100" />
          <div>
            <div className="d-flex pl-3 pr-3 justify-content-between">
              <h5 className="yellow pt-3">{props.destiny}</h5>
              <h5 className="yellow pt-3">{props.days} days</h5>
            </div>
            <p className="pl-3">{props.dates}</p>
            <p className="pl-3">{props.km} km</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardTrip