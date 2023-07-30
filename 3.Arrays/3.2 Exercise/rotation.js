function rotation(array, rotations) {

    for (let index = 1; index <= rotations; index++) {

        let firstEl = array.shift();
        array.push(firstEl);

    }
    console.log(array.join(' '));
}

rotation([51, 47, 32, 61, 21], 2)