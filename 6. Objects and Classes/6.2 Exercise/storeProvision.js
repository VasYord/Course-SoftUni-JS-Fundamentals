function provisions(firstArray, secondArray) {

    let localStorage = {};

    for (let index = 0; index < firstArray.length; index += 2) {
        const product = firstArray[index];
        let quantity = Number(firstArray[index + 1]);
        localStorage[product] = quantity;
    }

    for (let index = 0; index < secondArray.length; index += 2) {
        let product = secondArray[index];

        if (!localStorage.hasOwnProperty(product)) {
            localStorage[product] = 0;

        }
        localStorage[product] += Number(secondArray[index + 1])
    }

    for (const productKey in localStorage) {
        console.log(`${productKey} -> ${localStorage[productKey]} `);
    }
}

provisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])