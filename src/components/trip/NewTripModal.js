import React, {useState, useEffect } from "react";
import {Redirect, useHistory} from 'react-router-dom'
import Map from '../trip/Map'
import './Map.css'
import Calendar from './Calendar'
import Confirmation from './Confirmation'
import AlphaGuideService from '../../services/AlphaGuideService'
import Button from '../buttons/Button'
import {WithAuthConsumer} from '../../contexts/AuthContext'

const NewTripModal = ({currentUser, setUser}) => {
    const { push } = useHistory()

    const [index, setIndex] = useState(1);
    const [country, setCountry] = useState(null)
    const [date, setDate] = useState(undefined)
    const [nextStep, setNextStep] = useState(false)
    const [userLocation, setUserLocation] = useState(null)

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((el) => {
            setUserLocation({lat: el.coords.latitude, lon: el.coords.longitude})
          }, )
    }, [])


    const calculateTripDays = (start, end) => {
        const date1 = new Date(start) 
        const date2 =  new Date(end)

        const differenceInTime = date2.getTime() - date1.getTime()
        const differenceInDays = differenceInTime / (1000 * 3600 * 24)
        return Math.floor(differenceInDays)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(calculateTripDays(date.startDate, date.endDate))
        AlphaGuideService.newTrip(
            {
                start_date: date.startDate,
                end_date: date.endDate,
                country: country,
                tripDays: calculateTripDays(date.startDate, date.endDate)
            }, 
            userLocation.lat, 
            userLocation.lon
        )
        .then(trip => {
            
            const trips = currentUser.trips ? [...currentUser.trips, trip] : [trip]
            
            setUser({...currentUser, trips: trips})
            push(`/trip/${trip.id}`)
        },
            () => {} ////esto lo ponemos porque no se puede poner un catch aqui
        )
        
    }

    const handleClick = (e) => {
        if (index === 1 && country === null) {
            return false
        } else if (index === 2 && date === undefined) {
            return false
        } else {
            return index < 3 ? setIndex(index + 1) : handleSubmit(e)
        }
    }

 
    return (
        <div>
            {index === 1 && <Map setCountry={setCountry} country={country}/>}
            {index === 2 && country !== null && <Calendar setDate={setDate} date={date}/>}
            {index === 3 && country !== null && date !== undefined && <Confirmation country={country} date={date}/>}

            <div className="d-flex justify-content-between">
                <Button onClick={() => setIndex(index - 1)} weight='aux' text="Back" />
                <Button onClick={handleClick} disabled={nextStep} weight='aux' text={index < 3 ? 'Next' : 'Confirm'} />
            </div>



        </div>

    )
};

export default WithAuthConsumer(NewTripModal);