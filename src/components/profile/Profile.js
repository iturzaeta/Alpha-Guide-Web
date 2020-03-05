import React, { useState, useEffect } from 'react'
import AlphaGuideService from '../../services/AlphaGuideService'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import {Redirect} from 'react-router-dom'
import './Profile.css'
import CardTrip from '../profile/CardTrip'
import Button from '../buttons/Button'
import Modal from 'react-bootstrap/Modal'
import EditForm from './EditForm'
import NewTripModal from '../trip/NewTripModal'

const EditModal = ({ setEditShowModal }) => {

  return (
      <React.Fragment >
          <Modal show={true} onHide={() => setEditShowModal(false)}>
          <Modal.Header closeButton>
              <Modal.Title>Edit your profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <EditForm setEditShowModal={setEditShowModal} />
          </Modal.Body>
          </Modal>
      </React.Fragment>
  );
}

export const TripModal = ({ setMapShowModal }) => {

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

const parseDate = date => {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  return `${day}/ ${month}/ ${year}`
}


const Profile = ({currentUser, logout, setUser}) => {
  const [showEditModal, setEditShowModal] = useState(false)
  const [showMapModal, setMapShowModal] = useState(false)
  const [tripDays, setTripDays] = useState(0)
  const [kmTrips, setKmTrips] = useState(0)

  const handleDelete = (id) => {
    console.log("CURRENT USER =>", currentUser)

    AlphaGuideService.deleteTrip(id) 
      .then(deletedTrip => {
        console.log(deletedTrip)
        const newTrips = currentUser.trips.filter(trip => trip.id !== deletedTrip.id)
        // const updatedUser = {...currentUser, trips: currentUser.trips.filter(trip => trip !== deletedTrip)} 
        const updatedUser = {...currentUser, trips: newTrips} 

        setUser(updatedUser)
        console.log("UPDATED USER =>",updatedUser)
      })
    
  }


  useEffect(() => {
    if(currentUser.trips) {
      const days = currentUser.trips.reduce((acc, trip) => {
        return acc + Math.floor(trip.tripDays)
      }, 0)
  
      setTripDays(days)
    }

    // const completedTrips = () => {
    //  return currentUser.trips.filter(trip => {
    //     let tripDate = new Date(trip.start_date)
    //     let currentDate = new Date()

    //     return tripDate < currentDate
    //   })
    // }

    if(currentUser.trips) {
      const km = currentUser.trips.reduce((acc, trip) => {
        return acc + Math.floor(trip.tripKm)
      }, 0)
  
      setKmTrips(km)
    }

    // setKmTrips(completedTrips())
  }, [currentUser])


  
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
              {/* <i className="ri-logout-circle-r-line icon"></i> */}
            </div>
    ​
            <div className="col-6 d-flex pt-3 addapt-visual">
              <i className="ri-user-line icon "></i>
              <p>{currentUser.name}</p>
            </div>
    ​
            <div className="col-6 d-flex pt-3 addapt-visual">
              <i className="ri-calendar-event-line icon"></i>
              <p>{tripDays} days traveled</p>
            </div>
    ​
            <div className="col-6 d-flex pb-4">
              <i className="ri-map-pin-5-line icon"></i>
              <p>{currentUser.country}</p>
            </div>
    ​
            <div className="col-6 d-flex pb-4">
              <i className="ri-footprint-line icon"></i>
              <p>{kmTrips} km in journeys</p>
            </div>
    ​
          </div>
    ​
          <div className="container">
            <h4>
              My trips
            </h4>
          </div>

          <div className="row cards d-flex">

              {currentUser.trips ? currentUser.trips.map((trip, key) => {

              if(trip.country !== null) {

                return <CardTrip 
                  id={trip.id} 
                  key={key} 
                  img={trip.country.image_cover} 
                  destiny={trip.country.name} 
                  days={Math.floor(trip.tripDays)} 
                  dates={`${parseDate(trip.start_date)} - ${parseDate(trip.end_date)}`} 
                  km={Math.floor(trip.tripKm)}
                  onClick={handleDelete}
                />
                }

              }) : <p>Configura tu primer viaje</p>}
              ​
              {/* <div className="row cards">
              <CardTrip img={FirstTrip} destiny="Cabo Verde" days="11 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
              <CardTrip img={SecondTrip} destiny="Mexico" days="6 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
              <CardTrip img={ThirdTrip} destiny="Tanzania" days="15 days" dates="23 Diciembre 2017 - 02 Enero 2018" km="5.480  Km recorridos" />
              </div> */}

          </div>

          <div className="d-flex align-items-center justify-content-center btn-div">
            <Button onClick={()  => setMapShowModal(true)} weight='main' text="New Trip" />
          </div>
          
        </div >

          {showEditModal && <EditModal setEditShowModal={setEditShowModal} />}
          {showMapModal && <TripModal setMapShowModal={setMapShowModal} />}

    </div> 
  )
}

export default WithAuthConsumer(Profile)