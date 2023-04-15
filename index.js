// code your solution here

function superbowlWin(array) {
  const winObj = array.find(newResult); //.find method takes a function
  return winObj ? winObj.year : undefined; //? checks if this first result exists else returns undefined
}

function newResult(passResults) {
  return passResults.result === "W"; //this is the true or false for the find method
}
