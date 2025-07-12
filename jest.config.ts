/**
 * CHADSON v69.0.0
 *
 * File: jest.config.ts
 *
 * Purpose: This file contains the configuration for Jest, the testing framework.
 * It's configured to work with Next.js and TypeScript.
 *
 *
 * Project: guerrilla.sh
 *
 *
 * Annotations:
 *
 * - `collectCoverage`: Enables test coverage reporting.
 * - `coverageProvider`: Specifies 'v8' as the coverage provider.
 * - `collectCoverageFrom`: Defines which files to include in coverage reports.
 * - `moduleNameMapper`: Maps module paths, especially for handling CSS modules and path aliases like `@/*`.
 * - `testEnvironment`: Sets the test environment to 'jsdom' to simulate a browser environment.
 * - `transform`: Configures how files are transformed before testing. `ts-jest` is used for TypeScript files.
 * - `transformIgnorePatterns`: Specifies which files in `node_modules` should not be transformed.
 * - `setupFilesAfterEnv`: Lists setup files to run after the test environment is set up.
 *
 */
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
 
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
 
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/_app.{js,jsx,ts,tsx}',
    '!src/**/_document.{js,jsx,ts,tsx}',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/reference/',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);