import webpack from 'webpack';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true,
  entry: [
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
