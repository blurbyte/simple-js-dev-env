# Simple JavaScript Development Environment

Development environment with essential tools to prototype / test JavaScript concepts.

### Getting started

**Node.js** is required to run this project.

To install all dependencies run `npm install` in your terminal.

To start development environment type `npm start -s`.
Entry point for JavaScript is *src/index.js* and for html of course *src/index.html*.

### What technologies this dev environment uses?
1. **babel** - js transpiler, use cutting edge JS features right now
2. **webpack** - smart module bundler, thanks to *hot module replacement* you don't have to refresh your browser after each change in code
3. **eslint** - js linter, running in background
4. **browser-sync** - simple dev server, lets you debug code in many browsers / devices at once
