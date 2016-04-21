var feathers = require('feathers');
var morgan = require('morgan');
var logger = require('../lib');
var app = feathers();

var userService = {
  find: function(params) {
    app.log('info', 'Your params are:', { foo: 'bar' });
    app.warn('I\'m warning you... there is an error coming.');
    app.error('Oh noes!!');
    
    return Promise.resolve([]);
  },

  setup: function(app){
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
