module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  //   extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true
    },
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {}
};
