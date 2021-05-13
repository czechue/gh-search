// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['next','<rootDir>/jest.setup.ts', "jest-date-mock"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/cypress/'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
