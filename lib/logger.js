/*
 * feathers-feathers-logger
 * https://github.com/feathersjs/feathers-logger
 *
 * Copyright (c) 2014 Eric Kryski
 * Licensed under the MIT license.
 */

'use strict';

var Proto = require('uberproto');

module.exports = function (logger) {
  return function () {
    var app = this;

    if (typeof logger === 'function') {
      app.use(logger);
    }
    else if (typeof logger !== 'undefined') {
      app.set('logger', logger);
    }

    Proto.mixin({
      _logger: logger,

      log: function() {
        if (typeof this._logger.log === 'function') {
          this._logger.log.apply(this._logger, arguments);
        }
        else {
          console.log('LOG: ', arguments);
        }
      },

      info: function() {
        if (typeof this._logger.info === 'function') {
          this._logger.info.apply(this._logger, arguments);
        }
        else {
          console.info('INFO: ', arguments);
        }
      },

      warn: function() {
        if (typeof this._logger.warn === 'function') {
          this._logger.warn.apply(this._logger, arguments);
        }
        else {
          console.warn('WARNING: ', arguments);
        }
      },

      error: function() {
        if (typeof this._logger.error === 'function') {
          this._logger.error.apply(this._logger, arguments);
        }
        else {
          console.error('ERROR: ', arguments);
        }
      },

      setup: function () {
        return this._super.apply(this, arguments);
      }
    }, app);
  };
};
