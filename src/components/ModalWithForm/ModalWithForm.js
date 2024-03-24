import React, { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm(props) {

  //now you can close the modal with your esc key :D
  useEffect(() => {
    function handleCloseOnEsc(e){
      if(e.key === 'Escape'){
        props.onModalClose();
      }
    }

    window.addEventListener('keydown', handleCloseOnEsc)
  });

  return (
    <div className="modal">
      <div className={`modal__container modal__container__${props.modalName}`}>
        <button className="modal__close-button" onClick={props.onModalClose} />
        <p className="modal__title">{props.modalTitle}</p>
        <form className={`modal__form modal__form_type_${props.modalName}`} onSubmit={props.submitMethod}>
          {props.children}
          <button className="modal__submit-button" type='submit'>{props.submitButtonName}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
