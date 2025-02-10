import React from "react";
import "./Modal.css";

function Modal({ onConfirm, onClose, isOpen }) {
 

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className = "modal-content">
        <h1>Are you sure you want to delete this comment?</h1>
        <button onClick={onConfirm}>Yes</button> 
        <button onClick={onClose}>No</button> 
      </div>
    </div>
  );
}

export default Modal;
