import React from 'react';
import './Modal.css';

export default function Modal(props) {
  const { pointsCount, closeModal } = props

  return (
    <div className="modal-window">
      <h2>{`You got ${pointsCount} points`}</h2>
      <p onClick={closeModal}>OK</p>
    </div>
  )
}
