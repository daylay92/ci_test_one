const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Test', () => {
  it('should return a welcome message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, GitHub Workflow!');
        done();
      });
  });

  it('should return a welcome message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal('Hello, GitHub Workflow!');
        done();
      });
  });
});