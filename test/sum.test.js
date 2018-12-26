const sum = require('./sum');
const expect = require('expect');

describe('sum', () => {
    it('should add 1 plus to to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
})