describe('template spec', () => {
  it('open login page', () => {
    cy.visit('http://localhost:5173/login')
    cy.get("input[placeholder=\"Enter username\"]").type("kminchelle");
    cy.get("input[placeholder=\"Enter password\"]").type("0lelplR");
    cy.contains('Submit').click()
    cy.visit('http://localhost:5173/')
  })
})