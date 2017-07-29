const chalk = require('chalk');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

console.log(chalk.bgGreen('Starting in dev env...')); // eslint-disable-line no-console
