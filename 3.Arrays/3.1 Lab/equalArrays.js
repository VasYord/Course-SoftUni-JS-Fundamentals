function equal(arr1, arr2) {

    let sum = 0;
    let index = -1;

    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);


        if (arr1[i] !== arr2[i]) {
            index = i;
            break;
        }
    }


    if (index === -1) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);

    }
}


equal(['10', '20', '30'], ['10', '20', '30'])