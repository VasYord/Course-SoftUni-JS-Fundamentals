function sum(num) {

    let numAsString = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    let numAsStringLengh = numAsString.length;

    for (let index = 0; index < numAsStringLengh; index++) {

        let currentNum = Number(numAsString[index]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(sum(1000435));