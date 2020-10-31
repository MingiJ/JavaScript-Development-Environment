//This file is not transpiled, so must use CommonJS and ES5

//Register babel to transpile before our tests to run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){};
