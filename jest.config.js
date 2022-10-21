module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/", "interfaces"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{ts,tsx}", "!src/index.tsx", "!src/reportWebVitals.ts", "!src/setupTests.ts", "!src/**/*.d.ts"]
};