const request = require('request');

const chai = require('chai');
const {JSON} = require("mocha/lib/reporters");
const expect = chai.expect;


describe('getRequest', function () {
  it('should get index page', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

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

  it('should get payment object', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      console.log(body);
      expect(body).to.deep.equal(JSON.stringify({ payment_methods: { credit_cards: true, paypal: false } }));
      done();
    });
  });

  it('should get name after login', function (done) {
    request.post('http://localhost:7865/login', {json: {userName: 'Yousef'}}, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal('Welcome Yousef');
      done();
    });
  });
});
