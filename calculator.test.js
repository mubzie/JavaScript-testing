import { add, subtract, multiply, divide } from "./calculator";

test('add 2 number a and b', () => {
    expect(add(4,5)).toBe(9);
})

test('multiply 2 number a and b', () => {
    expect(multiply(4,5)).toBe(20);
})

test('subtract 2 number a and b', () => {
    expect(subtract(5,4)).toBe(1)
})

test('divide 2 number a and b', () => {
    expect(divide(40,5)).toBe(8)
})