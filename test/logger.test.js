'use strict';

var assert = require('assert');
var feathers = require('feathers');
var logger = require('../lib/logger');

describe('Feathers logger', function () {
  it('initializes .log', function () {
    var app = feathers().configure(logger());

    assert.equal(typeof app.log, 'function', 'log method got added');
  });
});
