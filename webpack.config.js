module.exports = {
    output: {
      filename: 'my-first-webpack.bundle.js',
    },
    module: {
      rules: [{ test: /\.scss$/, use: 'sass' }],
    },
  };