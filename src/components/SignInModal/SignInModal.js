import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignInModal.css";

function SignInModal(props) {
  const [inputValEmail, setEmail] = useState("");
  const [inputValPassword, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submitMethod(inputValEmail, inputValPassword);
  }

  return (
    <ModalWithForm
      modalName="signin"
      modalTitle="Welcome Back, Codemaster!"
      submitButtonName="Sign In"
      onModalClose={props.handleCloseModal}
      submitMethod={handleSubmit}
    >
      <label>
        <input
          className="signinmodal__input"
          placeholder="Email*"
          type="email"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label>
        <input
          className="signinmodal__input"
          placeholder="Password*"
          type="password"
          required
          onChange={handlePasswordChange}
        />
      </label>
      <button className="sigininmodal__registration-button" type='button' onClick={props.handleOpenRegistrationModal}>
        Never been here? Sign up!
      </button>
    </ModalWithForm>
  );
}

export default SignInModal;
