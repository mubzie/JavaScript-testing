const analyzeArray = (num) => {

    let arr = [...num];

    let object = {};
    object.length = arr.length;

    object.average = 0;
    for (let i = 0; i < arr.length; i++) {
        object.average += arr[i] / 2;
    }

    object.max = Math.max(...num);
    object.min = Math.min(...num);

    return object;

}

export { analyzeArray }