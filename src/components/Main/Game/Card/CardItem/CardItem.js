import React from 'react';
import './CardItem.css';

export default function CardItem(props) {
  const { 
    setSelectedNumber, 
    cardIndex, 
    counter,
    cardInfo
  } = props;
  return (
    <tr>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 3)
        
      }} className={cardInfo.includes(counter - 3) ? "card-item_choosed" : null}>
      {counter - 3}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 2)
      }} className={cardInfo.includes(counter - 2) ? "card-item_choosed" : null}>
      {counter - 2}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 1)
      }} className={cardInfo.includes(counter - 1) ? "card-item_choosed" : null}>
      {counter - 1}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter)
      }} className={cardInfo.includes(counter) ? "card-item_choosed" : null}>
      {counter}
      </td>
    </tr>
  )
}
