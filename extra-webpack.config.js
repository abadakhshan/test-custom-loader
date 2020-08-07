
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader:  path.resolve('loader.js'),
          },
        ],
      },
    ],
  },
};
