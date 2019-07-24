import React from 'react';
import './HorizontalMenuItem.css';

export default function HorizontalMenuItem(props) {
  const { switchStatus, index, isActive } = props;
  return (
    <p
      className={
        isActive ? 'horizontal-menu_item active' : 'horizontal-menu_item'
      }
      onClick={() => {
        switchStatus(index)
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque, veniam rem, nobis aspernatur, doloribus beatae animi soluta recusandae quibusdam
      illo voluptatibus eligendi aperiam hic neque impedit non et ipsam officia.
    </p>
  );
}
