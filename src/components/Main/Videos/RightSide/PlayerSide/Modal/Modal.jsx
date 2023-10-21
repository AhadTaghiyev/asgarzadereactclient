import React from 'react'
import './Modal.scss'

const Modal = ({ isOpen, onClose, handleConfirmDelete }) => {

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className='modal-content'>
        <div className="head">
          <h3>Delete note?</h3>
          <p>Are you sure you want to delete this note?</p>
        </div>
        <div className="buttons">
          <button className='red' onClick={handleConfirmDelete}>Yes, delete</button>
          <button className='green' onClick={onClose}>No, keep it</button>
        </div>
      </div>
    </div>
  )
}

export default Modal