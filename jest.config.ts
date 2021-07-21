export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: false,
    },
  },
};
