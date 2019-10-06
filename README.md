# feathers-logger 

[![Build Status](https://secure.travis-ci.org/feathersjs-ecosystem/feathers-logger.png?branch=master)](http://travis-ci.org/feathersjs-ecosystem/feathers-logger)

> __Unmaintained:__ This module is no longer maintained.

> Logging mixin for a Feathers app.

## Migrating

As of October 2019 this module is no longer maintained since it contained only a few lines of redundant code. Applications generated with the latest `@feathersjs/cli` already export a separate `logger.js` file which sets up a normal [Winston Logger](https://github.com/winstonjs/winston) that can be directly required for logging purposes. If you would like logging capabilities available on the application object add

```
app.logger = logger;
```

At the end of your `src/app.js` (or `src/app.ts`) file.

## Getting Started

Install the module with: `npm install feathers-logger --save`

```js
var feathers = require('feathers');
var logger = require('feathers-logger');

var app = feathers()
  .configure(logger())
  .use('/users', userService);
```

## Documentation

`Feathers-logger` is just a simple wrapper for any logger so that you can conveniently do `app.log()`. There are 5 methods provided for you to use:

* `app.log()`
* `app.info()`
* `app.warn()`
* `app.error()`
* `app.debug()`

They have graceful fallback to the [core nodejs console methods](http://nodejs.org/api/stdio.html).

#### Vanilla Usage

```js
var feathers = require('feathers');
var logger = require('feathers-logger');
var memory = require('feathers-memory');

var app = feathers()
    .configure(logger())
    .use('/users', memory);

app.log('Server Started');
```

#### Using With [Winston](https://github.com/flatiron/winston)

```js
var winston = require('winston');
var feathers = require('feathers');
var logger = require('feathers-logger');
var memory = require('feathers-memory');

var app = feathers()
    .configure(logger(winston))
    .use('/users', memory);

app.log('Server Started');
```

#### Using With [Morgan](https://github.com/expressjs/morgan)

```js
var morgan = require('morgan');
var feathers = require('feathers');
var logger = require('feathers-logger');
var memory = require('feathers-memory');

var app = feathers()
    .configure(logger(morgan({
      format: 'dev'
    })))
    .use('/users', memory);

app.log('Server Started');
```

## Examples
See [example directory](https://github.com/feathersjs-ecosystem/feathers-logger/tree/master/example).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using the `npm test`.

## Release History

__0.2.0__

- cleans up a bunch of stuff
- makes plugin consistent with other plugins
- upgrades to latest uberproto
- removes feathers as peer dependency
- removes gulp from the equation
- tests against feathers 2

__0.1.0__

- Initial release
- Vanilla logging support
- Added documentation & example
- Support for Winston logger
- Support for Morgan logger

## License

Copyright (c) 2018

Licensed under the [MIT license](https://github.com/feathersjs-ecosystem/feathers-logger/blob/master/LICENSE-MIT).
