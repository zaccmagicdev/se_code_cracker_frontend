import React from "react";
import './Header.css';
import headerLogo from '../../vendor/header_logo.png';

function Header(props){
    return (
    <header className="header">
        <div className="header__section">
            <img className="header__logo" src={headerLogo} alt="CodeCracker Logo"/>
        </div>
        <div className="header__section header__section-buttons">
        </div>
    </header>
    )
}

export default Header;