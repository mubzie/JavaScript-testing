const capitalize = (str) => {

    let text = str;
    const capText = text.charAt(0).toUpperCase() + text.slice(1);

    return capText;
}

export { capitalize }