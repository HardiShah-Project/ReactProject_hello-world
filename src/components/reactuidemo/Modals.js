import React, { useState } from 'react'
import '../../App.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function Modals(){
    const [ModalIsOpen,setModalIsOpen]=useState(false)
    return(
        <div className='Modals'>
<button onClick={()=>setModalIsOpen(true)}>Modal Open</button>
          <Modal isOpen={ModalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}
          style={
              {
                  overlay:{
                      backgroundColor:"grey"
                  },
                  content:{
                      color:"orange"
                  }
              }
          }>
              <h1>Modal Header</h1>
              <p>Modal Body</p>
              <div>
                  <button onClick={()=>setModalIsOpen(false)}>Close Modal</button>
              </div>
          </Modal>
        </div>
       
    )
}
export default Modals