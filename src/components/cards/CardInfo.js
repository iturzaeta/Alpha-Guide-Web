import React from 'react' 
import './CardInfo.css'


const CardInfo = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-10 card-info">
      <img src={props.img} alt=""/>
      <h4 className="dark-blue">{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}


export default CardInfo