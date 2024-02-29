const request = require('request');

const chai = require('chai');
const expect = chai.expect;


describe('getRequest', function () {
  it('should get cart page with specific id', function (done) {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should get error when no id', function (done) {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
