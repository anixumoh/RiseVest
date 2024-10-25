import loginData from "../../cypress/fixtures/loginData.json";
import WalletPage from "../pom/WalletPage";
import WalletBalancePage from "../pom/WalletBalancePage";


const walletBalancePage = new WalletBalancePage()
const walletPage = new WalletPage()


describe('Risevest Wallet Balance', () => {

    it('users to show or hide their wallet balance', () => {
        cy.login(loginData.email, loginData.password); // user login
        walletPage.selectWallet() //select the wallet feature from nav bar
        walletBalancePage.selectHideBalance() //user toggle to hide balance
        walletBalancePage.selectShowBalance() // user toggle to show balance
        cy.wait(2000)
    });

    it('Validate balance is hidden/shown', () => {
        cy.login(loginData.email, loginData.password); // user login
        walletPage.selectWallet() //select the wallet feature from nav bar
        walletBalancePage.selectHideBalance() //user toggle to hide balance
        walletBalancePage.selectShowBalance() // user toggle to show balance
        walletPage.assertBalance() // Verify wallet balance is displayed correctly

    });

})