//tell the test what I want to test (describe)
describe('User Onboarding App', () => {
    beforeEach(() => {
        //tell the test to go to a fresh version of my site each time
        cy.visit('http://localhost:3000')
    })

    //Create helper functions for each area I want to test
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')

    it('Get an input and put something in it', () => {
        nameInput().type('Cara') //grab the name input and type a name into it
        nameInput().should('have.value', 'Cara') //test that the name input has the correct value
        emailInput().type('email@email.com') // put an email into the email input
        emailInput().should('have.value', 'email@email.com') //test that the email input has the correct value
        passwordInput().type('password') //put a password into the password input
    })
})