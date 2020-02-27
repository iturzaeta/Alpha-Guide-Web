import React, { useState } from 'react'
import AlphaGuideService from '../../services/AlphaGuideService'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import {Redirect} from 'react-router-dom'
import './Profile.css'
import CardTrip from '../profile/CardTrip'
import FirstTrip from '../../assets/img/iceland.png'
import SecondTrip from '../../assets/img/canada.png'
import ThirdTrip from '../../assets/img/austria.png'
import Button from '../buttons/Button'
import Modal from 'react-bootstrap/Modal'
import EditForm from './EditForm'
import Map from '../trip/Map'
import NewTripModal from '../trip/NewTripModal'

const EditModal = ({ setEditShowModal }) => {

    return (
        <React.Fragment >
            <Modal show={true} onHide={() => setEditShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit your profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm setEditShowModal={setEditShowModal}/>
            </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

const TripModal = ({ setMapShowModal }) => {

    return (
        <React.Fragment >
            <Modal show={true} onHide={() => setMapShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Plan your next adventure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewTripModal setMapShowModal={setMapShowModal}/>
            </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

const Profile = ({currentUser, logout}) => {

  const [showEditModal, setEditShowModal] = useState(false)

  const [showMapModal, setMapShowModal] = useState(false)
  
    if (!currentUser) {
        return <Redirect to="/"/>
    }  
    
    return (
        <div>
            <div className={showEditModal || showMapModal ? 'blur-bg d-block' : ''}>
              <div className="cover-photo">
                <img src={currentUser.image} alt="" />
              </div>
        ​
              <div className="row plaso modal-bg">
        ​
                <div className="col-12 d-flex justify-content-end action-buttons">
                  <button onClick={()  => setEditShowModal(true)} className="logout-btn"><i className="ri-edit-line icon"></i></button>
                  <button onClick={logout} className="logout-btn"><i className="ri-logout-circle-r-line icon"></i></button>
                </div>
        ​
                <div className="col-6 d-flex pt-3 addapt-visual">
                  <i className="ri-user-line icon "></i>
                  <p>{currentUser.name}</p>
                </div>
        ​
                <div className="col-6 d-flex pt-3 addapt-visual">
                  <i className="ri-calendar-event-line icon"></i>
                  <p>32 días como viajera</p>
                </div>
        ​
                <div className="col-6 d-flex pb-4">
                  <i className="ri-map-pin-5-line icon"></i>
                  <p>{currentUser.country}</p>
                </div>
        ​
                <div className="col-6 d-flex pb-4">
                  <i className="ri-footprint-line icon"></i>
                  <p>14,543km en trajectos</p>
                </div>
        ​
              </div>
        ​
              <div className="container">
                <h4>
                  Mis viajes
                </h4>
              </div>
        ​
              <div className="row cards">
                <CardTrip img={FirstTrip} destiny="Cabo Verde" days="11 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
                <CardTrip img={SecondTrip} destiny="Mexico" days="6 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
                <CardTrip img={ThirdTrip} destiny="Tanzania" days="15 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
              </div>

              <div className="d-flex align-items-center justify-content-center">
               <Button onClick={()  => setMapShowModal(true)} weight='main' text="Nuevo viaje" />  
              </div>

            </div>
              {showEditModal && <EditModal setEditShowModal={setEditShowModal} />}
              {showMapModal && <TripModal setMapShowModal={setMapShowModal} />}

             
        ​
            </div> 
          )

        
        }
    

export default WithAuthConsumer(Profile)