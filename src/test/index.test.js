const {assert} = require('chai');

const index = require('../index');

describe('sum', () => {
    it('sum', () => {
        assert.isDefined(index.sum);
    });
})
