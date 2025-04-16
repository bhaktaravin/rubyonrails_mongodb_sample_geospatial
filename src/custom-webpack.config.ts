const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
  output: {
    crossOriginLoading: 'anonymous',
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'MAPBOX_KEY'
    ])
  ]
};
