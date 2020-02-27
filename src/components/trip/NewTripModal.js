import React, {useState, useEffect } from "react";
import Map from '../trip/Map'
import './Map.css'
import Calendar from './Calendar'
import Confirmation from './Confirmation'
import Button from '../buttons/Button'

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
   
            <div className="d-flex justify-content-between">
                <Button onClick={() => setIndex(index - 1)} weight='aux' text="Back" />
                <Button onClick={() => setIndex(index + 1)} weight='aux' text="Next" />
            </div>

        </div>

    )
};

export default NewTripModal;