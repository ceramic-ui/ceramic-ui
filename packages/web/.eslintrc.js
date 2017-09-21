module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": ["error"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
