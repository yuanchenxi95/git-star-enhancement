module.exports = {
  'plugins': ['node'],
  // 'parser': 'babel-eslint',
  "env": {
    "es6": true,
  },
  'parserOptions': {
    "ecmaVersion": 2018,
    'sourceType': 'module',
    'codeFrame': true,
  },
  'extends': ['eslint:recommended', 'plugin:node/recommended'],
  'rules': {
    // 'node/exports-style': [
    //   'error',
    //   'exports'
    // ],
    "node/no-unsupported-features/es-syntax": 0,
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'no-console': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
  }
};
