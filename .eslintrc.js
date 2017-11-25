module.exports = {
  parser: 'babel-eslint',
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      },
    ],
    'comma-dangle': [
      1,
      'always-multiline',
    ],
    quotes: [
      2,
      'single',
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    semi: [
      2,
      'always',
    ],
    'no-console': [
      2,
      { allow: ['warn', 'error',] },
    ],
    'react/no-find-dom-node': 1,
    'no-empty': 2,
    'no-empty-function': 2,
    'arrow-parens': [
      2,
      'always',
    ],
    'eol-last': [
      2,
      'always',
    ],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true,
    },
  },
  plugins: [
    'react',
  ],
};
