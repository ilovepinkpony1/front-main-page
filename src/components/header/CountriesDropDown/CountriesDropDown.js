import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './CountriesDropDown.css';

export default function CountriesDropDown() {
  const options = [
    'Kiev',
    'Kharkiv',
    'Odessa',
  ];

  return (
    <div className="header-dropdown_wrapper">
      <Dropdown
        options={options}
        placeholder='Select your country'
      />
    </div>
  );
}
