//tell the test what I want to test (describe)
describe('User Onboarding App', () => {
    beforeEach(() => {
        //tell the test to go to a fresh version of my site each time
        cy.visit('http://localhost:3000')
    })

    //Create helper functions for each area I want to test
    const nameInput = () => cy.get('input[name=name]')

    it('Get an input and put something in it', () => {
        nameInput().type('Cara') //grab the name input and type a name into it
        nameInput().should('have.value', 'Cara') //test that the name input has the correct value
    })
})