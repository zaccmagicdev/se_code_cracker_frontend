import React from "react";
import "./Header.css";
import headerLogo from "../../vendor/header_logo.png";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="CodeCracker Logo" />
      <Navigation handleOpenSignUpModal={props.handleOpenSignUpModal}/>
    </header>
  );
}

export default Header;
