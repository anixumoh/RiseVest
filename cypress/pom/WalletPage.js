
class WalletPage {

    locators = {
        wallet: '.font-tomato:nth-child(4)',
        balance: '.mt-3',

    }


    selectWallet() {
        return cy.get(this.locators.wallet).should('have.text','Wallet').click();
    }

    assertBalance() {
        return cy.get(this.locators.balance).should("be.visible");
    }



}

export default WalletPage