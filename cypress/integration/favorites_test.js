describe('Favorites', () => {
    it('As a user, I should be able to click the favorite button on the weather card', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
            statusCode: 200,
            fixture: 'locations.json'
          }).as('matchedUrl')
          cy.visit('http://localhost:3000/')
          .get('button[class="favorite-button"]')
          .click()
    })
    it('As a user, after I\'ve clicked the favorite button I should be able to click the saved locations button in the nav to see my saved locations', () => {
        cy.get('button[class="favorites-button"]')
            .click()
            .url().should('eq', 'http://localhost:3000/favorites')
    })
    it('As a user, viewing the favorites page I should see a card with my favorited locations', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
            statusCode: 200,
            fixture: 'locations.json'
          }).as('matchedUrl')
        cy.get('div[class="card"]')
        .should('contain', 'Location: London')
        .should('contain', 'Temperature: 50 F')
        .should('contain', 'Conditions: Rainy')
        .should('contain', 'Feels Like: 51 F')
        .should('contain', 'Humidity: 30%')
        .should('contain', 'Wind: 15 mph')
        .should('contain', 'UV Index: 3')
        .should('be.visible')
    })
    it('As a user, I should see a button to unfavorite a saved location', () => {
        cy.get('button[class="unfavorite-button"]')
        .should('contain', 'Remove Favorite')
    })
    it('As a user, I should be able to click the unfavorite button', () => {
        cy.get('button[class="unfavorite-button"]')
        .click()
        .get('h2')
        .should('contain', 'Add Some Favorites!')
    })
})