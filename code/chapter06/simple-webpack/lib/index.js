const Compiler = require('./compiler');


const options = require('../simplepack.config');

new Compiler(options).run();