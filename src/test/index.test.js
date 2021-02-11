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
})

describe('equal', () => {
    it('equal', () => {
        assert.isDefined(index.equal);
    });
})

