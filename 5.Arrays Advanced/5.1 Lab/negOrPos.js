function solve(arr) {
    let myArr = []
    for (let el of arr) {
        el = Number(el);
        if (el < 0) {
            myArr.unshift(el);
        } else {
            myArr.push(el)
        }
    }

    console.log(myArr.join("\n"));
}

solve(['7', '-2', '8', '9'])
