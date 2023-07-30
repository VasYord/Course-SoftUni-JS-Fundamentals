function reveal(words, text) {

    let wordsArray = words.split(', ');

    for (const word of wordsArray) {

        let hiddenWords = '*'.repeat(word.length);
        text = text.replace(hiddenWords, word);

    }

    console.log(text);

}

reveal('great, learning', 'softuni is ***** place for ******** new programming languages')