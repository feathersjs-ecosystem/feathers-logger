const Proto = require('uberproto');

module.exports = logger => {
  return app => {
    if (typeof logger === 'function') {
      app.use(logger);
    } else if (typeof logger !== 'undefined') {
      app.set('logger', logger);
    }

    
    Proto.mixin({
      _logger: logger,

      log() {
        if (this._logger && typeof this._logger.log === 'function') {
          return this._logger.log.apply(this._logger, arguments);
        }
        
        return console.log('LOG: ', arguments);
      },

      info() {
        if (this._logger && typeof this._logger.info === 'function') {
          return this._logger.info.apply(this._logger, arguments);
        }
        
        return console.info('INFO: ', arguments);
      },

      warn() {
        if (this._logger && typeof this._logger.warn === 'function') {
          return this._logger.warn.apply(this._logger, arguments);
        }

        return console.warn('WARNING: ', arguments);
      },

      error() {
        if (this._logger && typeof this._logger.error === 'function') {
          return this._logger.error.apply(this._logger, arguments);
        }
        return console.error('ERROR: ', arguments);
      },

      debug() {
        if (this._logger && typeof this._logger.debug === 'function') {
          this._logger.debug.apply(this._logger, arguments);
        }

        return console.error('DEBUG: ', arguments);
      }
    }, app);
  };
};
