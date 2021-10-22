

// node js inbuilt global variables
console.log('__dirname');
console.log(__dirname);
console.log('__filename');
console.log(__filename);

// custom module exports and require
const modules = require('./modules')

modules.simple_function();
modules.simple_function_params('shravani');

// in-built modules
const os = require('os');
console.log(os.platform());
