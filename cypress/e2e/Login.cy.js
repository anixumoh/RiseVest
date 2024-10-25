import loginData from "../../cypress/fixtures/loginData.json";
import LoginPage from "../../cypress/pom/LoginPage";


const loginPage = new LoginPage()

describe('Risevest Login Page', () => {

    it('Validate login with valid credentials', () => {
        cy.login(loginData.email, loginData.password);
    });

    it('Validate login with valid email and invalid password', () => {
        cy.login(loginData.email, loginData.invalidPassword)
        loginPage.verifyErrorMessage(loginData.message); // error message as needed
    });

    it('Validate  login with invalid email and valid password', () => {
        cy.login(loginData.invalidEmail, loginData.password)
        loginPage.verifyErrorMessage(loginData.message) // error message as needed
    });

})