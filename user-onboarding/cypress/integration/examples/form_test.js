describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')

    it('Get an input and put something in it', () => {
        nameInput().type('Cara')
    })
})