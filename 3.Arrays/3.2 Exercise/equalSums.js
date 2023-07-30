function equal(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrLength = arr.length;

    for (let curI = 0; curI < arrLength; curI++) {
        for (let i = 0; i < arrLength; i++) {

            if (i !== curI) {
                let num = Number(arr[i]);
                if (i < curI) {
                    leftSum += num;
                } else if (i > curI) {
                    rightSum += num;
                }
            }
            if (curI === 0) {
                leftSum = 0;
            } else if (curI === arrLength - 1) {
                rightSum = 0;
            }
        }

        if (leftSum === rightSum) {
            console.log(curI);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;

        }

    }
    if (!isEqual) {
        console.log('no');
    }

}

equal([1, 2, 3, 3])