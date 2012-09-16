var assert, request;

assert = require('assert');
request = require('request');

describe('passwd.herokuapp.com', function() {
  it('should return 8 characteres long random alphanumeric strings, 100 times', function(done) {
    var n;

    for(n = 100; n--;) {
      (function(n) {
        request('http://localhost:1337', function(error, response, body) {
          assert(!!body.match(/^[a-zA-z0-9]{8}$/));
          n === 0 && done();
        });
      })(n);
    }
  });
});
