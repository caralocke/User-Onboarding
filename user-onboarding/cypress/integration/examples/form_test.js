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
    const termsInput = () => cy.get('input[name=terms]')
    const button = () => cy.get('button')

    it('Fill out inputs and submit', () => {
        nameInput().type('Cara') //grab the name input and type a name into it
        nameInput().should('have.value', 'Cara') //test that the name input has the correct value
        emailInput().type('email@email.com') // put an email into the email input
        emailInput().should('have.value', 'email@email.com') //test that the email input has the correct value
        passwordInput().type('password') //put a password into the password input
        termsInput().click() //check if the ToS box can be clicked
        button().click() //check if the submit button can be clicked        
    })

    it('Submit button should be disabled after form submission', () => {
        button().should('be.disabled') //check to see if the submit button is disabled after the form is submitted
    })
})