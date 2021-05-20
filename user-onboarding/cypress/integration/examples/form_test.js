describe('User Onboarding App', () => {
    //giving each test a fresh state to work with
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]') // created a helper for nameInput
    const emailInput = () => cy.get('input[name=email]') //created a helper for emailInput
    const passwordInput = () => cy.get('input[name=password]') //created a helper for passwordInput
    const termsInput = () => cy.get('input[name=terms]') //created a helper for termsInput

    it('Get an input and type something in it', () => {
        nameInput().type('Cara') //input a name
        nameInput().should('have.value', 'Cara') //use an assertion to check if the text inputted contains the name I provided
        emailInput().type('cara@cara.com') //input an email address
        passwordInput().type('abc123') //input a password
        termsInput().click() //see if user can check the terms of service box
    })
})