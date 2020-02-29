import React from 'react'
import './Trip.css'
import DatesImage from '../../assets/img/Dates.svg'
import MoneyImage from '../../assets/img/Money.svg'
import PlugImage from '../../assets/img/Plug.svg'
import HealthImage from '../../assets/img/Health.svg'
import DocImage from '../../assets/img/Passport.svg'
import Button from '../buttons/Button'
import ProfileImage from '../../assets/img/Background.png'
import Trello from '../trello/Trello'

const Trip = () => {
  return (
    <div>
      <p className="greeting">Jambo!</p>
      <div class="cover-photo">
        <img src={ProfileImage} alt="" />
      </div>

      <div className="container travel-info">
        <div className="row">

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={DatesImage} alt="" className="image-height" />
              <h5 className="dark-blue">Kenia</h5>
              <p>12 Agosto - 23 Agosto</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={MoneyImage} alt="" className="image-height" />
              <h5 className="dark-blue">Moneda Local</h5>
              <p>Shelin keniata</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={PlugImage} alt="" className="image-height" />
              <h5 className="dark-blue">Enchufes</h5>
              <p>Clavija tipo G</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={HealthImage} alt="" className="image-height" />
              <h5 className="dark-blue">Salud</h5>
              <p>Infórmate en sanidad internacional</p>
              <p>Localiza hospitales cercanos</p>
              <Button weight='aux' text="Ver precauciones" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-card-travel">
            <div className="inside-card">
              <img src={DocImage} alt="" className="image-height" />
              <h5 className="dark-blue">Documentación</h5>
              <p>Verifica la caducidad de tu pasaporte</p>
              <p>Haz copias a toda tu documentación</p>
              <Button weight='aux' text="Documentación" />
            </div>
          </div>

          </div>

          <div className="row">
            <Trello></Trello>
          </div>
      </div>
    </div>
  )
}

export default Trip