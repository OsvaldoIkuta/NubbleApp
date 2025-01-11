import type {Config} from 'jest';

const config: Config = {
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
    'src/{components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  'modulePathIgnorePatterns': [
    '.*/mockedData/.*',
  ],
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    'index',
  ],
  'transformIgnorePatterns': [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|@react-navigation|react-native-gesture-handler)/)',
  ],
};

export default config;

