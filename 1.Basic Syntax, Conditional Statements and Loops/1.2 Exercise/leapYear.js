function year(y) {

    let isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

year(1984)