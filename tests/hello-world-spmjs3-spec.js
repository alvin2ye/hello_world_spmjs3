var expect = require('expect.js');
var helloWorldSpmjs3 = require('../index');

describe('hello-world-spmjs3', function() {

  it('normal usage', function() {
    expect(helloWorldSpmjs3).to.be.a('string');  // add this
  });

});
