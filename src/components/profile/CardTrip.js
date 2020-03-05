import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'


const CardTrip = (props) => {

  return (

    <div className="col-4 my-card">
      
        <div>
          <div className="w-100 h-100 overflow-hidden inside-mytrip">
            <Link to={`/trip/${props.id}`}>
            <img src={props.img} alt="" className="w-100" />
            </Link>
            <i class="ri-delete-bin-2-fill close-tag" onClick={() => props.onClick(props.id)}></i>
            <div>
              <div className="d-flex pl-3 pr-3 justify-content-between">
                <h5 className="yellow pt-3 destiny-text">{props.destiny}</h5>
                <h5 className="yellow pt-3">{props.days} days</h5>
              </div>
              <p className="pl-3">{props.dates}</p>
              <p className="pl-3">{props.km} km</p>
            </div>
          </div>
        </div>
      
    </div>  

  )
}

export default CardTrip