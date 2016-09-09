var validate = require('webpack-validator');

var config = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/bundled/',
    filename: 'bundle.js'
  }
};

module.exports = validate(config);
