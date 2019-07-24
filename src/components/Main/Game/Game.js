import React, { useState, useEffect } from 'react'; 
import './Game.css';
import Card from './Card/Card';
import { getArrayOfRundomNumbers } from '../../../utils';

export default function Game(props) {
  const {
    gameSelectedNumbers,
    openModal,
    setSelectedNumber,
    setWinPoints,
    unsetWinPoints,
  } = props;

  const [data, handleData] = useState(null);

  useEffect(() => {
    if (data) {
       setWinPoints(getPoints());
    }
  });

function getPoints() {
  let count = 0
  gameSelectedNumbers.forEach((card, index) => {
    card.forEach(numberInCard => {
      if (data[index].includes(numberInCard)) {
        count++
      }
    })
  })
  return count;
}

  const invalidLength = gameSelectedNumbers.some(card => card.length > 5);
  const fetchData = async () => {
    try {
      const resultArray = await getArrayOfRundomNumbers(1, 20);
      handleData(resultArray);
    }
    catch (e) {
      throw e.message;
    }
  }

  return (
    <div className='game-wrapper'>
      <form className='game-wrapper_form'>

          {gameSelectedNumbers.map((card, index) => (
            <Card
              setSelectedNumber={setSelectedNumber}
              cardInfo={card}
              key={index}
              cardIndex={index}
              length={card.length}
              winNumbers={data ? data[index] : []}
            />
          ))}
      </form>
      <button type='button' onClick={() => {
        if (!data) {
          fetchData();
          openModal();
        } else {
          handleData(null);
          unsetWinPoints();
        }
      }} disabled={invalidLength} className="submit-button">
        {data ? 'Play more' : 'submit'}
      </button>
      <p className="game-warning">{invalidLength ? 'You must select only 5 positions in the card.' : null}</p>
    </div>
  );
}
