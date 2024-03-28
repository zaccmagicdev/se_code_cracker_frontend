import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './RegistrationModal.css'

function RegistrationModal(props) {

  const [inputValEmail, setEmail] = useState("");
  const [inputValPassword, setPassword] = useState("");
  const [inputValUsername, setUsername] = useState("");
  const [inputValAvatar, setAvatar] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submitMethod(inputValEmail, inputValPassword, inputValUsername, inputValAvatar);
  }

  return (
    <ModalWithForm
      modalName="registration"
      modalTitle="Welcome aboard!"
      submitButtonName="Sign me up!"
      onModalClose={props.handleCloseModal}
      submitMethod={handleSubmit}
    >
      <p className="signupmodal__text">We simply need your:</p>
      <label>
        <input
          className="signupmodal__input"
          placeholder="Email*"
          type="email"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label>
        <input
          className="signupmodal__input"
          placeholder="Password*"
          type="password"
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        <input
          className="signupmodal__input"
          placeholder="Username*"
          type="string"
          required
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        <input
          className="signupmodal__input"
          placeholder="Avatar*"
          type="url"
          required
          onChange={handleAvatarChange}
        />
      </label>
      <button className="signupmodal__signin-button" type='button' onClick={props.handleOpenSignInModal}>
        Already Signed Up? Then Sign in!
      </button>
    </ModalWithForm>
  );
}

export default RegistrationModal;
