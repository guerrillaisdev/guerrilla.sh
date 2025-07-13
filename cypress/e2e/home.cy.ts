// Chadson v69.0.0: E2E tests for the Guerrilla Automotive homepage.
// Updated to test the new tab-based navigation and shadcn/ui components.

describe('Homepage Tab Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the hero content and navigate between tabs correctly', () => {
    // 1. Verify Hero content is visible
    cy.contains('h1', 'Guerrilla Automotive').should('be.visible');
    cy.contains('p', 'Mobile & Remote Performance Tuning in Austin, TX').should('be.visible');

    // 2. Verify Services tab is active by default
    cy.get('button[role="tab"]').contains('Services').should('have.attr', 'data-state', 'active');
    cy.contains('h3', 'ECU Remapping').should('be.visible');
    cy.contains('h3', 'Get in Touch').should('not.exist');

    // 3. Click on the Contact tab
    cy.get('button[role="tab"]').contains('Contact').click();

    // 4. Verify Contact tab is now active and its content is visible
    cy.get('button[role="tab"]').contains('Contact').should('have.attr', 'data-state', 'active');
    cy.contains('h3', 'Get in Touch').should('be.visible');
    cy.contains('h3', 'ECU Remapping').should('not.exist');

    // 5. Click back to the Services tab
    cy.get('button[role="tab"]').contains('Services').click();

    // 6. Verify Services tab is active again and its content is visible
    cy.get('button[role="tab"]').contains('Services').should('have.attr', 'data-state', 'active');
    cy.contains('h3', 'ECU Remapping').should('be.visible');
    cy.contains('h3', 'Get in Touch').should('not.exist');
  });
});