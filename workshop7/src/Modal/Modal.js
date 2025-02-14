import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css"; 

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
