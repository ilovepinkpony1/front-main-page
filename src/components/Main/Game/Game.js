import React, { useState } from 'react'; 
import './Game.css';
import Card from './Card/Card';
import { getArrayOfRundomNumbers } from '../../../utils';

export default function Game(props) {
  const {
    gameSelectedNumbers,
    winNumbersCombinations,
    gamePlayedOnce,
    openModal,
    loadNumbers,
    setSelectedNumber,
    setGameStatus,
  } = props;

  const [data, handleData] = useState(null);
  const invalidLength = gameSelectedNumbers.some(card => card.length > 5);

  const fetchData = async () => {
    try {
      const resultArray = await getArrayOfRundomNumbers(1, 20);
      handleData(resultArray)
    }
    catch (e) {
      throw e.message;
    }
  }

  return (
    <div className='game-wrapper'>
      <form>
        <div>
          {gameSelectedNumbers.map((card, index) => (
            <Card
              setSelectedNumber={setSelectedNumber}
              cardInfo={card}
              winNumbersCombinations={winNumbersCombinations}
              key={index}
              cardIndex={index}
              length={card.length}
            />
          ))}
        </div>
        <button type='button' onClick={() => {
          fetchData();
          setGameStatus();
        }} disabled={invalidLength}>
          {gamePlayedOnce ? 'Play more' : 'submit'}
        </button>
      </form>
      <p>{invalidLength ? 'You must select only 5 positions in the card.' : null}</p>
    </div>
  );
}
