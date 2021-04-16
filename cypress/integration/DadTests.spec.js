import { FaItalic } from "react-icons/fa"

describe('My-Name-Is-Dad', () => {
    // beforeEach(() => {
    //
    //
    // })


    it('should show a random dad joke on page load', () => {
        cy.fixture('dad-joke-data.json').then((dadJoke) => {
            cy.intercept('https://icanhazdadjoke.com/', dadJoke)
        })
        cy.visit('http://localhost:3000')
        cy.contains('Red light')
    })

    it('should generate a dad joke on button click', () => {
        cy.fixture('random-button-joke.json').then(dadJoke => {
            cy.intercept('https://icanhazdadjoke.com/', dadJoke)
        })
        cy.get('.joke-btn').click()
        cy.contains('nose')
    })

    it('should go to the search page when the search bar is clicked', () => {
        cy.get('.nav-search').click().url().should('eq', 'http://localhost:3000/search')
    })

    it('should search a dadegory', () => {
      cy.fixture('searched-joke-data.json').then((dadJokes) => {
          cy.intercept('https://icanhazdadjoke.com/search?term=hipster', dadJokes)
      }).get('.search-input').type('hipster').get('.search-btn').click()
    })
})
