import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <ul className="navigation">
      <li className="navigation__link">
      <Link to="/rules">
        <button className="navigation__button">Rules</button>
      </Link>
      </li>
      <li className="navigation__link">
      <Link to="/aboutme">
        <button className="navigation__button">About Me</button>
      </Link>
      </li>
    </ul>
  );
}

export default Navigation;
