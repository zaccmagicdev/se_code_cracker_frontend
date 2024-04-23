import React from "react";
import "./Modal.css";

function Modal(props) {

  return (
    <div className="modal">
      <div className={`modal__container modal__container__${props.modalName}`}>
        <p className="modal__title">{props.modalTitle}</p>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
