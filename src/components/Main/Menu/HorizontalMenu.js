import React from 'react';
import './HorizontalMenu.css';
import HorizontalMenuItem from './HorizontalMenuItem/HorizontalMenuItem';
import ReactDOM from 'react-dom';
import ModalHandler from '../../ModalWindow/ModalHandler';

export default function HorizontalMenu(props) {
  const { itemsStatus, switchStatus, openModalStatus } = props;

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
      {
        openModalStatus ? ReactDOM.createPortal(
          <ModalHandler />,
          document.getElementById('portal')
        ) : null
      }
    </div>
  );
}
