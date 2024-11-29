import React from 'react'
import '../../App.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast=({closeToast})=>{
    return(
        <div>
            something went wrong!
            <button onClick={closeToast}>close</button>
        </div>
    )
}

toast.configure()
function Toast(){
    const notify=()=>{
        toast('Basic Notification',{position:toast.POSITION.TOP_LEFT})
        toast.success('Success Notification',{position:toast.POSITION.TOP_CENTER,autoClose:8000})
        toast.info('info Notification',{position:toast.POSITION.TOP_RIGHT,autoClose:false})
        toast.warn(<CustomToast/>,{position:toast.POSITION.BOTTOM_LEFT})
        toast.error('Error Notification',{position:toast.POSITION.BOTTOM_CENTER})
        toast('Basic Notification',{position:toast.POSITION.BOTTOM_RIGHT})
    }
    return(
        <div className='Toast'>
           <button onClick={notify}>Notify!</button>
        </div>
       
    )
}
export default Toast