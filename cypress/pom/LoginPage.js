
class LoginPage {

    locators = {

        errorMessage: '.MuiAlert-message'
    }
    verifyErrorMessage(message) {
        cy.get(this.locators.errorMessage).should('contain', message)
    }


}

export default LoginPage