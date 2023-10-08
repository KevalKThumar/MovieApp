import React from "react";
import "./style.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
       
      </div>
      <div className="popup-overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popup;
