'use strict';

var expect = require('chai').expect;
var feathers = require('feathers');
var logger = require('../lib/');

describe('Feathers logger', function () {
  var app;

  before(function(){
    app = feathers().configure(logger());
  });
  
  it('initializes .log', function () {
    expect(typeof app.log).to.equal('function');
  });

  it('initializes .info', function () {
    expect(typeof app.info).to.equal('function');
  });

  it('initializes .warn', function () {
    expect(typeof app.warn).to.equal('function');
  });

  it('initializes .error', function () {
    expect(typeof app.error).to.equal('function');
  });
});
