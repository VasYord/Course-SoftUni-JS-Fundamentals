function max(arr) {

    let result = '';
    let arrLength = arr.length;

    for (let index = 1; index <= arrLength; index++) {

        let isMax = true;

        let currentNum = Number(arr[index - 1]);

        for (let j = index; j < arr.length; j++) {

            let nextNumber = Number(arr[j]);

            if (nextNumber >= currentNum) {

                isMax = false;
                break;
            }

        }

        if (isMax) {
            result += `${currentNum} `;
        }


    }
    console.log(result);
}

max([1, 4, 3, 2])