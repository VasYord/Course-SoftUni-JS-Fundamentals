function merge(firstArray, secondArray) {

    let result = [];
    let arrayLength = firstArray.length;

    for (let index = 0; index < arrayLength; index++) {
        if (index % 2 === 0) {
            result[index] = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            result[index] = firstArray[index] + secondArray[index];
        }
    }
    console.log(result.join(' - '));

}

merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])