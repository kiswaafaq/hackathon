describe('Product Listing Tests', () => {
  it('should display products on the homepage', () => {
    cy.visit('/');
    cy.get('.product-listing', { timeout: 10000 }).should('be.visible');
    cy.get('.product-card').should('have.length.at.least', 1);
  });

  it('should add a product to the cart', () => {
    cy.visit('/'); // Ensure navigation before action
    cy.get('.add-to-cart-btn', { timeout: 10000 }).first().should('be.visible').click();
    cy.get('.cart-count', { timeout: 10000 }).should('contain', '1');
  });
});
