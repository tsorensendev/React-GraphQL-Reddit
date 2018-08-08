module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-one-expression-per-line': false,
    'react/jsx-filename-extension': false,
    'react/forbid-prop-types': false,
  }
};
