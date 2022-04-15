describe('Main', () => {
    it('As a user on page load I should see a card with weather data', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
        .get('div[class="card"]')
        .should('contain', 'Location: London')
        .should('contain', 'Temperature: 50 F')
        .should('contain', 'Conditions: Rainy')
        .should('contain', 'Feels Like: 51 F')
        .should('contain', 'Humidity: 30%')
        .should('contain', 'Wind: 15 mph')
        .should('contain', 'UV Index: 3')
        .should('be.visible')
    })
    it('As a user on page load I should see an image on the weather card', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
        .get('div[class="card"]')
        .get('img')
        .last()
        .should('have.attr', 'alt', 'Rainy')
    })
    it('As a user on page load I should see a favorite button on the weather card', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
      statusCode: 200,
      fixture: 'locations.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
        .get('button[class="favorite-button"]')
        .should('contain', 'Favorite')
    })
})