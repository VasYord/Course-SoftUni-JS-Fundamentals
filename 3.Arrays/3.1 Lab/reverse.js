function reverse(n, arr) {

    let res = [];

    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
    }

    let buff = "";

    for (let i = res.length - 1; i >= 0; i--) {
        buff += res[i] + " ";

    }

    console.log(buff);
}

reverse(3, [10, 20, 30, 40, 50])