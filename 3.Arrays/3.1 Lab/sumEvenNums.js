function sum(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

    }

    let sum = 0;

    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sum([1, 2, 3, 4, 5, 6])