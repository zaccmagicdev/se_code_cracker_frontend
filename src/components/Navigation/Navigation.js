import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation(props) {

  return (
    <ul className="navigation">
      <li className="navigation__link">
        <button className="navigation__button">Rules</button>
      </li>
      <li className="navigation__link">
      <Link to="/aboutme">
        <button className="navigation__button">About Me</button>
      </Link>
      </li>
      <li className="navigation__link">
        <button className="navigation__button" onClick={props.handleOpenSignUpModal}>Sign in</button>
      </li>
    </ul>
  );
}

export default Navigation;
