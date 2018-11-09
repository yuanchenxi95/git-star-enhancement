module.exports = {
  'plugins': ['node'],
  'extends': ['eslint:recommended', 'plugin:node/recommended'],
  'rules': {
    'node/exports-style': [
      'error',
      'module.exports'
    ],
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
    'node/no-unsupported-features': ['error', {
      'version': 9
    }]
  }
};
