import React from 'react';
import './HorizontalMenu.css';
import HorizontalMenuItem from './HorizontalMenuItem/HorizontalMenuItem';

export default function HorizontalMenu(props) {
  const { itemsStatus, switchStatus } = props;

  return (
    <div className='horizontal-menu_wrapper'>
      {itemsStatus.map((item, index) => (
        <HorizontalMenuItem
          isActive={item}
          switchStatus={switchStatus}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}
