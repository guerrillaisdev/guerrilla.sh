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

describe('Contact Form Submission', () => {
  
  it('should submit the form successfully and show a success message', () => {
    // Intercept the API call and mock a successful response
    cy.intercept('POST', '/api/contact', {
      statusCode: 200,
      body: { message: 'Email sent successfully' },
    }).as('contactRequest');

    // Test on desktop
    cy.viewport('macbook-16');
    cy.visit('/');
    
    cy.get('input[id="name"]').type('Cypress Test');
    cy.get('input[id="email"]').type('cypress@test.com');
    cy.get('textarea[id="message"]').type('This is an E2E test message.');
    cy.get('button[type="submit"]').click();

    cy.contains('Sending...').should('be.visible');
    cy.wait('@contactRequest');
    cy.contains('Message sent successfully!').should('be.visible');
    cy.get('input[id="name"]').should('have.value', '');

    // Test on mobile
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.get('button[role="tab"]').contains('Contact').click();

    cy.get('input[id="name"]').type('Cypress Test Mobile');
    cy.get('input[id="email"]').type('cypress.mobile@test.com');
    cy.get('textarea[id="message"]').type('This is a mobile E2E test message.');
    cy.get('button[type="submit"]').click();

    cy.contains('Sending...').should('be.visible');
    cy.wait('@contactRequest');
    cy.contains('Message sent successfully!').should('be.visible');
    cy.get('input[id="name"]').should('have.value', '');
  });

  it('should show an error message if the form submission fails', () => {
    // Intercept the API call and mock a failed response
    cy.intercept('POST', '/api/contact', {
      statusCode: 500,
      body: { message: 'Failed to send email' },
    }).as('contactRequest');

    cy.visit('/');
    
    cy.get('input[id="name"]').type('Cypress Fail');
    cy.get('input[id="email"]').type('cypress.fail@test.com');
    cy.get('textarea[id="message"]').type('This message should fail.');
    cy.get('button[type="submit"]').click();

    cy.contains('Sending...').should('be.visible');
    cy.wait('@contactRequest');
    cy.contains('Failed to send email').should('be.visible');
    cy.get('input[id="name"]').should('have.value', 'Cypress Fail');
  });

});