import loginData from "../../cypress/fixtures/loginData.json";
import WalletPage from "../pom/WalletPage";

const walletPage = new WalletPage()

describe('Risevest Wallet Page', () => {

    it(' Select the wallet section on the application.', () => {
        cy.login(loginData.email, loginData.password); // user login
        walletPage.selectWallet()  //select the wallet feature from nav bar
    });

    it('Validate wallet balance should displayed correctly', () => {
        cy.login(loginData.email, loginData.password); // user login
        walletPage.assertBalance() // Verify wallet balance is displayed correctly
    });

})