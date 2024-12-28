module.exports = {
  'preset': 'react-native',
  'setupFiles': [
    '<rootDir>/src/test/jestSetup.ts',
  ],
  'setupFilesAfterEnv': ['@testing-library/react-native/extend-expect'],
  'moduleDirectories': [
      'node_modules',
      './src/test',
    ],
  'collectCoverage': true,
  'collectCoverageFrom': [
    'src/{components,utils}/**/*.{js,jsx,ts,tsx}',
  ],
  'modulePathIgnorePatterns': [
    '.*/mockedData/.*',
  ],
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    'index',
  ],
};
