function reverse(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let current = arr[i];
        let next = arr[arr.length - 1 - i];
        arr[i] = next;
        arr[arr.length - 1 - i] = current;


    }

    console.log(arr.join(" "));
}

reverse(['a', 'b', 'c', 'd', 'e'])