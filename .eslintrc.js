module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  root: true,
  env: {

    //  adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
    es2020 : true,
    es6 : true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // 
    '@typescript-eslint/no-unused-vars': 'off',

    // must use single quote
    '@typescript-eslint/quotes': ['warn', "single", "avoid-escape"],
  
    // 4 space intent
    "@typescript-eslint/indent": ["warn", 4],
    
    // no need semi-colon
    "semi": ["error", "never"],

    "array-bracket-newline" : ["warn", "consistent"],

    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
  }],

    "@typescript-eslint/brace-style" : ["warn","1tbs", {"allowSingleLine" : false}]
  },
};
