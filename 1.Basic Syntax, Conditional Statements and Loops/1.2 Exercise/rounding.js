function round(num, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let result = parseFloat(num.toFixed(precision));

    console.log(result);
}

round(3.1415926535897932384626433832795, 2)