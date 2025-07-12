/**
 * CHADSON v69.0.0
 *
 * File: cypress.config.ts
 *
 * Purpose: This file contains the configuration for Cypress, the E2E testing framework.
 * It's configured for a Next.js application.
 *
 *
 * Project: guerrilla.sh
 *
 *
 * Annotations:
 *
 * - `e2e.baseUrl`: Sets the base URL for Cypress tests, pointing to the Next.js dev server.
 * - `e2e.setupNodeEvents`: A function to set up Node.js-level event listeners.
 *
 */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});