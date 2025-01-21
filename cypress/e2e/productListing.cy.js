describe('Product Listing Tests', () => {
    it('should display products on the homepage', () => {
      cy.visit('/');
      cy.get('.product-listing').should('exist');
      cy.get('.product-card').should('have.length.at.least', 1);
    });
    
    it('should add a product to the cart', () => {
      cy.get('.add-to-cart-btn').first().click();
      cy.get('.cart-count').should('contain', '1');
    });
  });
  