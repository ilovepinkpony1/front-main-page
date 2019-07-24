export function getArrayOfRundomNumbers(minNumber, maxNumber) {
  const HightOrderArray = [];
  for (let i = 0; i < 5; i++) {
    HightOrderArray.push([]);
    for (let j = 0; j < 5; j++) {
      HightOrderArray[i].push(Math.floor(Math.random() * (maxNumber + 1 - minNumber) + minNumber))
    }
  }
  return HightOrderArray;
}

export function getCardItemClassName(cardInfo, winNumbers, counter) {
  if (cardInfo.includes(counter) && winNumbers.includes(counter)) {
    return 'win-number';
  }
  if (cardInfo.includes(counter)) {
    return 'card-item_choosed';
  }
  if (winNumbers.includes(counter)) {
    return 'win-number';
  }
}