const expect = require('chai').expect;
const feathers = require('@feathersjs/feathers');
const logger = require('../lib/');

describe('Feathers logger', () => {
  const app;

  beforeEach(() => {
    app = feathers().configure(logger());
  });

  it('initializes .log', () => {
    expect(typeof app.log).to.equal('function');
  });

  it('initializes .info', () => {
    expect(typeof app.info).to.equal('function');
  });

  it('initializes .warn', () => {
    expect(typeof app.warn).to.equal('function');
  });

  it('initializes .error', () => {
    expect(typeof app.error).to.equal('function');
  });

  it('initializes .debug', () => {
    expect(typeof app.debug).to.equal('function');
  });
});
