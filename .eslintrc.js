module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-recommended'],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "prettier": true,
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  overrides: [
    {
      "files": [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      "env": {
        "jest": true
      }
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    "no-multiple-empty-lines": [2, {"max": 3, "maxEOF": 1}],
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },      
      "multiline": {
        "max": 3
      }
    }]
  }
}