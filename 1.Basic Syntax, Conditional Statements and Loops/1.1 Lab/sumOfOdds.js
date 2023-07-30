function sum(n) {
    let sum = 0;
    let currentOdd = 1;

    for (let i = 1; i <= n; i++) {
        console.log(currentOdd);
        sum += currentOdd;
        currentOdd += 2;
    }

    console.log(`Sum: ${sum}`);
}

sum(10)