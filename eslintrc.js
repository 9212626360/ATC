module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off', // Disable the rule during deployment
    // other rules
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      env: {
        "browser": true,
        "node": true,
        ci: process.env.CI === 'false',
      },
    },
  ],
};
