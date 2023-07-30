function solve(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < arr.length; index++) {

        if (index !== 0) {
            let currentNum = Number(arr[index]);
            let previousNum = Number(arr[index - 1]);

            if (currentNum === previousNum) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNum;
                }
            } else {
                sequence = 1;
            }
        }
    }

    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])