// Chadson v69.0.0: E2E tests for the Guerrilla Automotive homepage.

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the header', () => {
    cy.get('header').should('be.visible');
    cy.contains('Guerrilla Automotive LLC').should('be.visible');
  });

  it('should display the hero section', () => {
    cy.get('section').contains("Unleash Your Vehicle's True Potential").should('be.visible');
  });

  it('should display the services section', () => {
    cy.get('section').contains('Our Services').should('be.visible');
  });

  it('should display the contact section', () => {
    cy.get('section').contains('Contact Us').should('be.visible');
  });

  it('should display the footer', () => {
    cy.get('footer').should('be.visible');
    cy.contains('Guerrilla Automotive LLC. All Rights Reserved.').should('be.visible');
  });
});