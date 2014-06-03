/*
 * feathers-associations
 * https://github.com/feathersjs/associations
 *
 * Copyright (c) 2014 David Luecke
 * Licensed under the MIT license.
 */

'use strict';

var Proto = require('uberproto');
var winston = require('winston');

module.exports = function () {
  return function () {
    var app = this;

    Proto.mixin({
      _logger: {},

      log: function() {
        this._logger.info.apply(logger, arguments);
      },

      setup: function () {
        app.set('logger', winston);
        this._logger = app.get('logger');

        return this._super.apply(this, arguments);
      }
    }, app);
  };
};
