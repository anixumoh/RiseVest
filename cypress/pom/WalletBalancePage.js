class WalletBalancePage {

    locators = {
        hideWalletBalance: '[data-testid="VisibilityOffIcon"]',
        showWalletBalance: '[data-testid="VisibilityIcon"]',
    }


    selectHideBalance() {
        return cy.get(this.locators.hideWalletBalance).should('exist').and('be.visible').click();
    }

    selectShowBalance() {
        return cy.get(this.locators.showWalletBalance).should('exist').and('be.visible').click();
    }






}

export default WalletBalancePage