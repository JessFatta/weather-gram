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
    cy.get('button[class="lets-go-button"]').click()
  })

  it('As a user, I should be able to click the 3 day button and see a 3 day forecast for that location', () => {
    cy.get('button[class="3day-button"]').click()

    .url().should('eq', 'http://localhost:3000/3Day')
  })

  it('As a user, I should be able to click the home button and return to the main view with the current weather for that location', () => {
    cy.get('button[class="home-button"]').click()

    .url().should('eq', 'http://localhost:3000/')
  })

  it('As a user, I should be able to click the favorites button and route to the favorites page', () => {
    cy.get('button[class="favorites-button"]').click()

    .url().should('eq', 'http://localhost:3000/favorites')
  })

  it('As a user, I should be able to click the random button and return to the main view with a new random city displayed', () => {
    cy.get('button[class="random-button"]').click()

    .url().should('eq', 'http://localhost:3000/')
  })
})
