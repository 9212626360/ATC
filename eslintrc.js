// .eslintrc.js
module.exports = {
    extends: ['react-app', 'react-app/jest'],
    plugins: ['react', 'jsx-a11y'],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off', // Disable the rule during deployment
      // Add other rules here if needed
    },
  };
  