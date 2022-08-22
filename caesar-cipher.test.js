import { caesar } from "./caesar-cipher";

test('shift letters by 1', () => {
    expect(caesar('wale', 1)).toEqual('xbmf');
})

test('shift letter by 3', () => {
    expect(caesar('wale', 3)).toEqual('zdoh');
})