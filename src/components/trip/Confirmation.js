import React from 'react'

const parseDate = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day} / ${month} / ${year}`
}

const Confirmation = ({ country, date }) => {
    console.log('puta fecha', date)
    return (

        <div>
            <p>{country}</p>
            {parseDate(date.startDate)} - {parseDate(date.endDate)}
        </div>
    )
}

export default Confirmation