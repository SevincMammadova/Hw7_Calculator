const {assert} = require('chai');

const index = require('../index');

describe('sum', () => {
    it('sum', () => {
        assert.isDefined(index.sum);
    });

    it('function sum works correctly when num1 = 1, num2 = 0', () => {
        const expected = 1;

        const actual = index.sum(1, 0);

        assert.deepEqual(actual, expected);
    });

    it('function sum works correctly when num1 = 1, num2 = 2', () => {
        const expected = 3;

        const actual = index.sum(1, 2);

        assert.deepEqual(actual, expected);
    });

    it('function sum works correctly when num1 = -1, num2 = 0', () => {
        const expected = -1;

        const actual = index.sum(-1, 0);

        assert.deepEqual(actual, expected);
    });

    it('function sum correctly when num1 = -1, num2 = 2', () => {
        const expected = 1;

        const actual = index.sum(-1, 2);

        assert.deepEqual(actual, expected);
    });

    it('function sum correctly when num1 = -1, num2 = -5', () => {
        const expected = -6;

        const actual = index.sum(-1, -5);

        assert.deepEqual(actual, expected);
    });
})
