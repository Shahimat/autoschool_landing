const path = require('path');

let config = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'logic', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};

module.exports = (env, argv) => {
  config.mode = argv.mode? argv.mode: 'production';
  return config;
};