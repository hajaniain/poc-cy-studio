describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:4200");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-input-0').click();
    cy.get('#mat-input-0').type('test');
    cy.get('#mat-input-1').type('john');
    cy.get('#mat-input-2').type('doe');
    cy.get('.col > .mat-focus-indicator > .mat-button-wrapper').click();
    cy.get('#mat-input-6').click();
    cy.get('#mat-input-4').click();
    cy.get('#mat-input-4').type('paris');
    cy.get('.mat-select-placeholder').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get('#mat-input-5').click();
    cy.get('#mat-input-5').type('75');
    /* ==== End Cypress Studio ==== */
  });
});
