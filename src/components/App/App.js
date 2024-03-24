import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AboutMe from "../AboutMe/AboutMe";
import React, { useState } from 'react';
import SignInModal from '../SignInModal/SignInModal';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

function App() {

  const [activeModal, setActiveModal] = useState("");

  function handleOpenSignInModal(){
    setActiveModal("signin")
  }

  function handleOpenRegistrationModal(){
    setActiveModal("signup")
  }

  function handleCloseModal(){
    setActiveModal("")
  }

  function handleLogin(email, password){
    console.log(email, password);
  }

  return (
    <div className="App">
      <Header handleOpenSignUpModal={handleOpenSignInModal}/>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />}/>
      </Routes>
      {activeModal === "signin" && (<SignInModal handleCloseModal={handleCloseModal} submitMethod={handleLogin} handleOpenRegistrationModal={handleOpenRegistrationModal}/>)}
      {activeModal === "signup" && (<RegistrationModal handleCloseModal={handleCloseModal} />)}
    </div>
  );
}

export default App;
