import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'src',

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,

        //These settings suppress noisy webpack output so only errors are displayed to the console
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
      }),
      webpackHotMiddleware(bundler)
    ]
  },

  //no need to watch '*.js' here, webpack will take care of it for us
  //including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ],
  notify: false
});
