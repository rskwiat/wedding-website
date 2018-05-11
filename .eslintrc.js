module.exports = {
  parser: 'babel-eslint',  
  'extends': [
   'eslint:recommended',
   'plugin:react/recommended'
  ],
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    "react/require-extension": "off"
  }
}

