process.env.NODE_ENV = 'test';

//disable webpack specyfic features
['.css', '.scss', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

//allows ES2015 imports to be recognized by mocha
require('babel-register')();
