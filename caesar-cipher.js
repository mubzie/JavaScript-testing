const caesar = (letter, num) => {

    let result = "";
    num = (num % 26 + 26) % 26;

    for (let i = 0; i < letter.length; i++) {
        let ascii = letter[i].charCodeAt();
        if((ascii >= 65 && ascii <= 90)) {
            result += String.fromCharCode((ascii - 'A' .charCodeAt(0) + num) % 26 + 'A' .charCodeAt(0));
        } else if ((ascii >= 97 && ascii <= 122)) {
            result += String.fromCharCode((ascii - 'a' .charCodeAt(0) + num) % 26 + 'a' .charCodeAt(0)) 
        } else {
            return result + letter[i];
        }
    }

    return result;
}

export { caesar }