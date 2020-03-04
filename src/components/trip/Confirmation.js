import React from 'react'

const parseDate = date => {
    
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/ ${month}/ ${year}`
}

const Confirmation = ({ country, date }) => {
    
    return (

        <div>
            <div>
                <h2>Your destination:</h2>
                <p>{country}</p>
            </div>
            
            <div>
                <h2>Your dates:</h2>Your dates: 
                {parseDate(date.startDate)} - {parseDate(date.endDate)}
            </div>

            Are you sure this is your trip?
        </div>
    )
}

export default Confirmation