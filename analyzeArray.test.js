import { analyzeArray } from "./analyzeArray";

test('return object with average', () => {
    expect(analyzeArray([2,3,4,5])).toStrictEqual({
        "average": 7,
        "length": 4,
        "max": 5,
        "min": 2
    });
})