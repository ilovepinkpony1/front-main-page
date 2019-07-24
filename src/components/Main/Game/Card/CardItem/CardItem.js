import React from 'react';
import './CardItem.css';
import { getCardItemClassName } from '../../../../../utils';

export default function CardItem(props) {
  const { 
    setSelectedNumber, 
    cardIndex, 
    counter,
    cardInfo,
    winNumbers,
  } = props;

  return (
    <tr>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 3)
        
      }} className={getCardItemClassName(cardInfo, winNumbers, (counter - 3))}>
      {counter - 3}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 2)
      }} className={getCardItemClassName(cardInfo, winNumbers, (counter - 2))}>
      {counter - 2}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter - 1)
      }} className={getCardItemClassName(cardInfo, winNumbers, (counter - 1))}>
      {counter - 1}
      </td>
      <td onClick={() => {
        setSelectedNumber(cardIndex, counter)
      }} className={getCardItemClassName(cardInfo, winNumbers, (counter))}>
      {counter}
      </td>
    </tr>
  )
}
