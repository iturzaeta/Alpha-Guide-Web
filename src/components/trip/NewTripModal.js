import React, {useState, useEffect } from "react";
import Map from '../trip/Map'
import './Map.css'
import Calendar from './Calendar'
import Confirmation from './Confirmation'

const NewTripModal = () => {
        const [index, setIndex] = useState(1);
        const [country, setCountry] = useState(null)
        const [date, setDate] = useState(undefined)
    // const [allCountries, setCountries] = useState([])
    // console.log('DATE DE NEW TRIP MODAL',date)
    
    return (
        <div>
            {index === 1 && <Map setCountry={setCountry} country={country}/>}
            {index === 2 && country !== null && <Calendar setDate={setDate} date={date}/>}
            {index === 3 && country !== null && date !== undefined && <Confirmation country={country} date={date}/>}
            <button onClick={() => setIndex(index - 1)}>Back</button>
            <button onClick={() => setIndex(index + 1)}>Next</button>
            

        </div>

    )
};

export default NewTripModal;