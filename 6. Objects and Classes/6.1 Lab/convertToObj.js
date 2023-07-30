function city(jsonString) {

    let obj = JSON.parse(jsonString);

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

city('{"name": "George", "age": 40, "town": "Sofia"}');