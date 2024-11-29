import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root')
function IdleTimerContainer() {
    const IdleTimerRef = useRef(null)
    const sessionTimeoutRef=useRef(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const onIdle = () => {
        console.log('User is idle')
        setModalIsOpen(true)
        sessionTimeoutRef.current=setTimeout(logOut,5000)
    }
    const stayActive=()=>{
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is active')
    }
    const logOut=()=>{
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        setIsLoggedIn(false)
        console.log('User has logged out')
    }

    return (
        <div className='IdleTimerContainer'>
            {
                isLoggedIn ? <h1>Hello Vishwas</h1> : <h1>Hello Guest</h1>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You've been idle for a while!</h2>
                <h2>You will be logged out soon</h2>
                <button onClick={logOut}>Log me out</button>
                <button onClick={stayActive}>Keep me signed in</button>
            </Modal>
            <IdleTimer ref={IdleTimerRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
        </div>
    )
}
export default IdleTimerContainer