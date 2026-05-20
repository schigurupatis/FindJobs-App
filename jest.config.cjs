// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // <-- Add this line
  moduleNameMapper: {
    // Safely bypasses styling dependencies
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
