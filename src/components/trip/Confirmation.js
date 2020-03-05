import React from 'react'
import './Trip.css'

const parseDate = date => {

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/ ${month}/ ${year}`
}

const Confirmation = ({ country, date }) => {

    return (

        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="yellow">Your destination:</h5>
                    <div className="confirmation-text"> <p>{country}</p> </div>
                </div>
                <div>
                    <h5 className="yellow">Your dates:</h5>
                    <p className="confirmation-text">{parseDate(date.startDate)} - {parseDate(date.endDate)} </p>
                </div>
             </div>
            <div className="d-flex justify-content-center">
                <h4 className="dark-blue">Are you sure this is your trip?</h4>
            </div>


        </div>
    )
}

export default Confirmation