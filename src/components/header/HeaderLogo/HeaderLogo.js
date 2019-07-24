import React from 'react';
import Logo from './Awfully-pretty-logo-web.png';
import './HeaderLogo.css';

export default function HeaderLogo() {
  return (
    <div className='header-logo_wrapper'>
      <img src={Logo} alt='header-logo-na`vi' className='header-logo_logo' />
    </div>
  );
}
