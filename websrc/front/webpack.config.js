const path = require('path');

module.exports = {
  entry: './src/18-01-25/static/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};