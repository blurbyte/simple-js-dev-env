# Simple JavaScript Development Environment

Development environment with essential tools to prototype / test JavaScript concepts.

###Getting started

**Node.js** is required to run this project.

After cloning the repository, install **Yarn** - dependency manager. Don't worry. It is not replacement for **npm**, but rather useful enhancement. One of the biggest advantages of using it is modules installation time - around 15 seconds instead of 3 minutes - very useful for code reviews, etc. Check out [migration guide from npm to yarn](https://yarnpkg.com/en/docs/migrating-from-npm).

To install all dependencies instead of running `npm install` in your terminal, run `yarn` command instead.

To start development environment type old good `npm start -s`.
Entry point for JavaScript is *src/index.js* and for html of course *src/index.html*.

### What technologies this dev environment uses?
1. **babel** - js transpiler, use cutting edge JS features right now
2. **webpack** - smart module bundler, thanks to *hot module replacement* you don't have to refresh your browser after each change in code
3. **eslint** - js linter, running in background
4. **browser-sync** - great dev server, lets you debug code in many browsers / devices at once
