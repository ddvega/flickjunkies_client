module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'dot-notation': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'object-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
  },
  parser: 'babel-eslint',
};
