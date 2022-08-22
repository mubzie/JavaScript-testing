const reverseString = (str) => {

    let text = "";

    for (let i = str.length - 1; i >= 0; i--) {
        text += str[i]
    }

    return text;
}

export { reverseString }