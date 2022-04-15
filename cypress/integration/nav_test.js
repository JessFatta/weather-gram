describe('Nav Bar', () => {
  it('As a user, I should be able to visit a page and see the title', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
      .get('.title')
      .contains('Weather Gram')
  })

  it('As a user, I should see a search bar to enter locations', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.get('input[class="search-bar"]')
      .should('have.attr', 'placeholder', 'Enter City or Zip')
      .type('Denver')
      .should('have.value', 'Denver')
  })

  it('As a user, I should be able to click the Let\'s go! button', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.get('button[class="lets-go-button"]').click()
  })

  it('As a user, I should be able to click the 3 day button and see a 3 day forecast for that location', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'forecastDay.json'
    }).as('forecastUrl')
    cy.get('button[class="three-day-button"]').click()

    .url().should('eq', 'http://localhost:3000/3Day')
  })

  it('As a user, I should be able to click the home button and return to the main view with the current weather for that location', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'forecastDay.json'
    }).as('forecastUrl')
    cy.get('button[class="home-button"]').click()

    .url().should('eq', 'http://localhost:3000/')
  })

  it('As a user, I should be able to click the favorites button and route to the favorites page', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'forecastDay.json'
    }).as('forecastUrl')
    cy.get('button[class="favorites-button"]').click()

    .url().should('eq', 'http://localhost:3000/favorites')
  })

  it('As a user, I should be able to click the random button and return to the main view with a new random city displayed', () => {
    cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'forecastDay.json'
    }).as('forecastUrl')
    cy.get('button[class="random-button"]').click()

    .url().should('eq', 'http://localhost:3000/')
  })
})
