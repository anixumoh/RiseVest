
class PlansPage {

    locators = {
        plans: '.font-tomato:nth-child(3)',
        plansList: '[data-test-id="user-plan"]'
    }

    selectPlans() {
        return cy.get(this.locators.plans).should('have.text','Plans').click();
    }

    verifyPlans() {
        cy.get(this.locators.plansList).then($el=>{
            expect($el.length).to.be.greaterThan(0)
        })
    }

    waitForPlans() {
        return cy.wait(3000)
    }
    wait() {
        return cy.wait(3000)
    }

}

export default PlansPage