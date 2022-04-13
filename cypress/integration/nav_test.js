describe('Nav Bar', () => {
  it('As a user, I should be able to visit a page and see the title', () => {
    cy.visit('http://localhost:3000/')
      .get('.title')
      .contains('Weather Gram')
  })

  it('As a user, I should see a search bar to enter locations', () => {
    cy.get('input[class="search-bar"]').type('Denver')
  })

  it('As a user, I should be able to click the Let\'s go! button', () => {
    cy.get('div[class="search-bar-container"]').get('button').first().click()
  })
})
