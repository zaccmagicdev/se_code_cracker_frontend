import React from "react";
import "./Header.css";
import headerLogo from "../../vendor/header_logo.png";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__section">
        <Link to="/se_code_cracker_frontend">
          <img
            className="header__logo"
            src={headerLogo}
            alt="CodeCracker Logo"
          />
        </Link>
        <h1 className="header__joke">{props.joke === "" ? 'Loading funny...' : props.joke}</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
