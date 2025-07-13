// Chadson v69.0.0: E2E tests for the Guerrilla Automotive homepage.
// Updated to test the new responsive layout for both mobile and desktop.

describe('Homepage Responsive Layout', () => {
  
  context('Mobile Viewport (iphone-6)', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit('/');
    });

    it('should display hero content and use tab navigation', () => {
      // Verify Hero content
      cy.contains('h1', 'Guerrilla Automotive').should('be.visible');

      // Verify Tabs are visible and functional
      cy.get('button[role="tab"]').contains('Services').should('be.visible');
      cy.get('button[role="tab"]').contains('Contact').should('be.visible');

      // Verify Services tab is active by default
      cy.contains('h3', 'ECU Remapping').should('be.visible');
      cy.contains('h3', 'Get in Touch').should('not.exist');

      // Click on the Contact tab
      cy.get('button[role="tab"]').contains('Contact').click();

      // Verify Contact tab is now active and its content is visible
      cy.contains('h3', 'Get in Touch').should('be.visible');
      cy.contains('h3', 'ECU Remapping').should('not.exist');
    });
  });

  context('Desktop Viewport (macbook-16)', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.visit('/');
    });

    it('should display all content sections at once', () => {
      // Verify Hero content
      cy.contains('h1', 'Guerrilla Automotive').should('be.visible');

      // Verify Tabs are NOT visible
      cy.get('button[role="tab"]').should('not.be.visible');

      // Verify both Services and Contact content are visible simultaneously
      cy.contains('h3', 'ECU Remapping').should('be.visible');
      cy.contains('h3', 'Get in Touch').should('be.visible');
    });
  });

});