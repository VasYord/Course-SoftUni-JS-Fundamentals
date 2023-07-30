function integ(arr) {

    for (let index = 0; index < arr.length; index++) {

        let numAsString = arr[index].toString();
        let reversedNum = numAsString.split('').reverse().join('');


        if (numAsString === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

console.log(integ([123, 323, 421, 121]));