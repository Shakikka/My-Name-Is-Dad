import { FaItalic } from "react-icons/fa"

describe('My-Name-Is-Dad', () => {
    beforeEach(() => {
       cy.fixture('dad-joke-data.json').then((dadJoke) => {
           cy.intercept('https://icanhazdadjoke.com/', { dadJoke: dadJoke.joke })
       })
        cy.fixture('searched-joke-data.json').then((dadJokes) => {
            cy.intercept('https://icanhazdadjoke.com/search?term=hipster', { foundJokes: dadJokes })
        })
        cy.visit('http://localhost:3000')
    })
    
    it('should show a random dad joke on page load', () => {
        
    })
})