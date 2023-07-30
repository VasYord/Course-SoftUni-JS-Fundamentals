function distinct(numbers) {

    let uniqueEls = [];

    for (const number of numbers) {
        if (!uniqueEls.includes(number)) {
            uniqueEls.push(number);
        }
    }
    console.log(uniqueEls.join(' '));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);