function search(numbersArr, commandsArr) {

    let numbersToTake = commandsArr[0];
    let numbersToDelete = commandsArr[1];
    let searchedNumbers = commandsArr[2];

    let newArray = numbersArr.slice(0, numbersToTake);
    newArray.splice(0, numbersToDelete);

    let numberCounter = newArray.filter(e => e === searchedNumbers).length;
    console.log(`Number ${searchedNumbers} occurs ${numberCounter} times.`);


}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);