import React from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'


const Calendar = ({setDate, date}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
    ]);

const createDates = (dates) => {
    setDate(dates)  
}
    // console.log('START ESTADO CALENDARIO =>', `${state[0].startDate}`)
    // console.log('END ESTADO CALENDARIO =>', `${state[0].endDate}`) 
    return (
    
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={item => {
                    if (item.selection.startDate !== item.selection.endDate) {
                        createDates(item.selection)
                    }
                    
                    setState([item.selection])
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
                
            />
        </div>
    )
}

export default Calendar
  
