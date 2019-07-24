function getArrayOfRundomNumbers(minNumber, maxNumber) {
  const HightOrderArray = [];
  for (let i = 0; i < 5; i++) {
    HightOrderArray.push([]);
    for (let j = 0; j < 5; j++) {
      HightOrderArray[i].push(Math.random() * (maxNumber + 1 - minNumber) + minNumber)
    }
  }
  return HightOrderArray;
}