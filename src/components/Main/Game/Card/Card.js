import React from 'react';
import './Card.css';
import CardItem from './CardItem/CardItem';

export default function Card(props) {
  const { 
    setSelectedNumber, 
    cardIndex, 
    cardInfo,
    length
  } = props;

  return (
    <table className={length > 5 ? 'invalid-card' : null}>
      <tbody>
        <CardItem 
          cardIndex={cardIndex} 
          setSelectedNumber={setSelectedNumber}
          counter={4}
          cardInfo={cardInfo}
        />
        <CardItem
          cardIndex={cardIndex}
          setSelectedNumber={setSelectedNumber}
          counter={8}
          cardInfo={cardInfo}
        />
        <CardItem
          cardIndex={cardIndex}
          setSelectedNumber={setSelectedNumber}
          counter={12}
          cardInfo={cardInfo}
        />
        <CardItem
          cardIndex={cardIndex}
          setSelectedNumber={setSelectedNumber}
          counter={16}
          cardInfo={cardInfo}
        />
        <CardItem
          cardIndex={cardIndex}
          setSelectedNumber={setSelectedNumber}
          counter={20}
          cardInfo={cardInfo}
        />
      </tbody>
    </table>
  );
}
