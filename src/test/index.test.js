const {assert} = require('chai');

const index = require('../index');

describe('insert', () => {
    it('insert', () => {
        assert.isDefined(index.insert);
    });
})

describe('clean', () => {
    it('clean', () => {
        assert.isDefined(index.clean);
    });

    // it('clean works correctly',() => {
    //     const example = insert(4);
    //     const expected = "";

    //     const actual = clean();

    //     assert.deepEqual(actual,expected);
    // })
})

describe('equal', () => {
    it('equal', () => {
        assert.isDefined(index.equal);
    });
})

