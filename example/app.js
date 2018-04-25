const feathers = require('@feathersjs/feathers');
const morgan = require('morgan');
const logger = require('../lib');
const app = feathers();

const userService = {
  find (params) {
    app.log('info', 'Your params are:', { foo: 'bar' });
    app.warn('I\'m warning you... there is an error coming.');
    app.error('Oh noes!!');

    return Promise.resolve([]);
  },

  setup (app) {
    this.app = app;
  }
};

app.configure(logger(morgan({
  format: 'dev'
})))
  .configure(feathers.rest())
  .use('/users', userService);

app.listen(3030);

app.info('App listening on 127.0.0.1:3030');
