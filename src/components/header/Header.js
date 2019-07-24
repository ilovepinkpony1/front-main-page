import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import CountriesDropDown from './CountriesDropDown/CountriesDropDown';
import RegisterButton from './RegisterButton/RegisterButton';
import AuthorizationButton from './AuthorizationButton/AuthorizationButton';
import TrashButton from './TrashButton/TrashButton';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <HeaderLogo />
        <CountriesDropDown />
        <div className="header-buttons">
          <RegisterButton />
          <AuthorizationButton />
          <TrashButton />
        </div>
      </nav>
    </header>
  )
}
