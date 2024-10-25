class CreatePlansPage {

    locators = {
        plans: '.font-tomato:nth-child(3)',
        buildWealth: '.mt-4',
        startInvestButton: 'section +div>button',
        currency: '.ml-3.inline-block',
        planName: '#name',
        continueButton: 'Continue',
        percentage: '#mui-1',
        age: '#mui-2',
        preference: '.MuiFormGroup-root',
        portfolio: 'Balanced Investor',
        projection: '.h-full-page',
        createPlan: '.mt-10 button',
        successMessage: '.mt-8',
        reviewText: 'Review',
        viewPlan: '.col-span-full > .MuiButtonBase-root',
        noLater:'.space-y-4 > .MuiButton-containedSecondary',
        plansList: '[data-test-id="user-plan"]'

    }

    getPlans() {
        return cy.get(this.locators.plans).click();
    }

    assertWaitPlans() {
        return cy.wait(3000)
    }

    assertWait() {
        return cy.wait(10000)
    }

    clickBuildWealthNavigation() {
        return cy.get(this.locators.buildWealth).click();
    }

    clickStartInvestButton() {
        return cy.get(this.locators.startInvestButton).click({force: true});
    }

    selectNigeriaASCurrency() {
        return cy.get(this.locators.currency).eq(0).click();
    }

    enterPlansName(pName) {
        return cy.get(this.locators.planName).type(pName);
    }

    clickContinueButton() {
        return cy.contains(this.locators.continueButton).click();

    }

    enterPlanAmount(pAmount) {
        return cy.get(this.locators.planName).type(pAmount);// duplicated locators
    }

    continueButton() {
        return cy.contains(this.locators.continueButton).click();// duplicated locators
    }

    enterInvestmentPercentage(percentage) {
        return cy.get(this.locators.percentage).type(percentage);// duplicated locators
    }

    retirementAge(age) {
        return cy.get(this.locators.age).type(age);// duplicated locators
    }

    selectPreference(option) {
        return cy.get(this.locators.preference).each(($el) => {
            if ($el.text().includes(option)) {
                cy.wrap($el).click();
            }
        });
    }

    assertPortfolio(age) {
        return cy.contains(this.locators.portfolio).should('contain.text', 'Balanced');
    }

    assertProjectionPage(age) {
        return cy.get(this.locators.projection).should('contain.text', 'Projection')
            .and('contain.text','Wealth Goal')
    }

    agree_ContinueButton() {
        return cy.contains(this.locators.continueButton).click();// duplicated locators
    }

    assertReviewPage(age) {
        return cy.contains(this.locators.reviewText).should('contain.text', 'Review')

    }

    createPlanButton() {
        return cy.get(this.locators.createPlan).click();
    }

    assertSuccessMessage(age) {
        return cy.get(this.locators.successMessage).should('contain.text', 'You just created your Build Wealth plan')

    }
    clickViewPlanButton() {
        return cy.get(this.locators.viewPlan).click();
    }
    selectNoLater() {
        return cy.get(this.locators.noLater).click();
    }

    verifyPlanslist() {
        cy.get(this.locators.plansList).should('contain.text','Anie').and("contain.text",'Build Wealth Assets')
    }

}

export default CreatePlansPage