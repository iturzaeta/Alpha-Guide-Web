import React, { useEffect, useState } from 'react'
import './Trip.css'
import DatesImage from '../../assets/img/Dates.svg'
import MoneyImage from '../../assets/img/Money.svg'
import PlugImage from '../../assets/img/Plug.svg'
import HealthImage from '../../assets/img/Health.svg'
import DocImage from '../../assets/img/Passport.svg'
import Button from '../buttons/Button'
import ProfileImage from '../../assets/img/Background.png'
import { useParams } from 'react-router-dom'
import AlphaGuideService from '../../services/AlphaGuideService'


const parseDate = date => {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  return `${day}/ ${month}/ ${year}`
}

const Trip = () => {

  const { id } = useParams();

    const [trip, setTrip] = useState(null)

  useEffect(() => {
    AlphaGuideService.findTrip(id)
      .then(trip => setTrip(trip))
  }, [id])
  

  return trip ?
   (
    <div>
      <p className="greeting">{trip.country.greeting}</p>
      <div className="cover-photo">
        <img src={trip ? trip.country.image_cover : null} alt="" />
      </div>

      <div className="container travel-info">
        <div className="row">

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={DatesImage} alt="" className="image-height" />
              <h5 className="dark-blue">{trip.country.name}</h5>
              <p>{parseDate(trip.start_date)} - {parseDate(trip.end_date)}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={MoneyImage} alt="" className="image-height" />
              <h5 className="dark-blue">Local Currency</h5>
              <p>{trip.country.currencyName}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={PlugImage} alt="" className="image-height" />
              <h5 className="dark-blue">Plugs</h5>
              <p>Type {trip.country.plugs.type}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={HealthImage} alt="" className="image-height" />
              <h5 className="dark-blue">Health</h5>
              <p>Find out about international health</p>
              <p>Locate nearby hospitals</p>
              <a class="btn-tripinfo" type="button" target="_blank" href={`https://www.mscbs.gob.es/profesionales/saludPaises.do?metodo=verDetallePais&pais=${trip.country.healthCode}`}>See precaution</a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={DocImage} alt="" className="image-height" />
              <h5 className="dark-blue">Documents</h5>
              <p>Check the expiration date of your passport</p>
              <p>Make copies of your documents</p>
              <a class="btn-tripinfo" type="button" target="_blank" href={`http://www.exteriores.gob.es/Portal/es/ServiciosAlCiudadano/SiViajasAlExtranjero/Paginas/DetalleRecomendacion.aspx?IdP=${trip.country.docCode}`}>Check documents</a>
            </div>
          </div>

          </div>
      </div>
    </div>
  ) :
  <div>Loading...</div>
}

export default Trip