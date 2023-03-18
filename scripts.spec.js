const scripts = require('./scripts');


describe('Start', function() {
    test('Test scripts file', function() {
      expect(scripts.hello()).toEqual('hello from Script.js');
    });
  });
  