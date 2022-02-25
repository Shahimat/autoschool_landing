const LF = require('./lib/LF');
const Landing = require('./landing/index');

const generator = Landing(LF);

console.log( generator() );