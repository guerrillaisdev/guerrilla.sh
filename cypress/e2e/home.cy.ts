/// &lt;reference types="cypress" /&gt;
/**
 * CHADSON v69.0.0
 *
 * File: cypress/e2e/home.cy.ts
 *
 * Purpose: This file contains the E2E tests for the home page.
 *
 *
 * Project: guerrilla.sh
 *
 */
describe('Home Page', () => {
  it('should display the main heading', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Guerrilla.sh');
  });
});