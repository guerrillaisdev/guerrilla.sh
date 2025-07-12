/**
 * CHADSON v69.0.0
 *
 * File: jest.setup.js
 *
 * Purpose: This file is used to set up the testing environment before each test.
 * It imports `@testing-library/jest-dom` to provide custom Jest matchers
 * for asserting on DOM nodes.
 *
 *
 * Project: guerrilla.sh
 *
 */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';