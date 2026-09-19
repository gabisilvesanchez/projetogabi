describe('Meu primeiro teste com Cypress', () => {

  beforeEach(() => {
    cy.visit('https://www.globo.com')
  })

  it('Deve validar o link de acesso', () => {

    cy.get('.header-title.homeui-tc-globoplay')
      .filter(':visible')
      .should('have.attr', 'href')
      .and('include', 'globoplay')

  })

})