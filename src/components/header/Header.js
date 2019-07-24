import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import CountriesDropDown from './CountriesDropDown/CountriesDropDown';
import RegisterButton from './RegisterButton/RegisterButton';
import AuthorizationButton from './AuthorizationButton/AuthorizationButton';
import TrashButton from './TrashButton/TrashButton';

export default function Header() {
  return (
    <header>
      <HeaderLogo />
      <CountriesDropDown />
      <RegisterButton />
      <AuthorizationButton />
      <TrashButton />
    </header>
  )
}
