import React from 'react'
import '../../App.css'
import {FaReact} from 'react-icons/fa'
import {MdAlarm} from 'react-icons/md'
import {IconContext} from 'react-icons'

function Icons(){
    return(
        <IconContext.Provider value={{color:'blue', size:'5rem'}}>
        <div className='Icons'>
            <FaReact />
            <MdAlarm />
        </div>
        </IconContext.Provider>
    )
}
export default Icons