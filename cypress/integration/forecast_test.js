describe('Forecast' ,() => {
    it('As a user, I should be able to click the 3 day forecast button', () => {
        cy.intercept('GET', 'http://api.weatherapi.com/v1/*', {
            statusCode: 200,
            fixture: 'forecastDay.json'
          }).as('matchedUrl')
          cy.visit('http://localhost:3000/')
            .get('button[class="three-day-button"]')
            .click()
            .url()
            .should('eq', 'http://localhost:3000/3Day')
    })
    it('As a user, I should see three day forecast cards', () => {
        cy.get('div[class="three-day-container"]')
            .should('contain', 'Date: 2022-04-15')
            .should('contain', 'Date: 2022-04-16')
            .should('contain', 'Date: 2022-04-17')
    })
})