import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { date } from 'yup/lib/locale'

function Datepicker() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)}
            dateFormat='yyyy/MM/dd' filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable={true}
            showYearDropdown
        scrollableYearDropdown></DatePicker>
        </div>
    )
}
export default Datepicker