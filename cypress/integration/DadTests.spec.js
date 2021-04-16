import { FaItalic } from "react-icons/fa"

describe('My-Name-Is-Dad', () => {
    beforeEach(() => {
        cy.fixture('searched-joke-data.json').then((dadJokes) => {
            cy.intercept('https://icanhazdadjoke.com/search?term=hipster', dadJokes)
        })
        
    })
    
    
    it('should show a random dad joke on page load', () => {
        cy.fixture('dad-joke-data.json').then((dadJoke) => {
            cy.intercept('https://icanhazdadjoke.com/', dadJoke)
        })
        cy.visit('http://localhost:3000')
        cy.contains('Red light')
    })
    it('should generate a dad joke on button click', () => {
        cy.get('.joke-btn').click()
    })
})