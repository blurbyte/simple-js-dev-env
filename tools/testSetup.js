const chalk = require('chalk');

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

console.log(chalk.bgGreen('Starting tests...')); // eslint-disable-line no-console
