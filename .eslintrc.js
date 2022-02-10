const base = require('@srclaunch/dx/.eslintrc.ui.js');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: './tsconfig.json',
  },
};
