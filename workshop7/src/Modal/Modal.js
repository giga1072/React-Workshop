import React from "react";

function Modal( {onConfirm,onClose, isOpen}) {

    if (!isOpen) return null;
  return (
    <div>
      
        <div>
          <h1>Are you sure you want to delete this comment?</h1>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      
    </div>
  );
}
export default Modal;