
import planData from "../../cypress/fixtures/planData.json";
import loginData from "../../cypress/fixtures/loginData.json";
import CreatePlansPage from "../pom/CreatePlansPage";

const createPlansPage = new CreatePlansPage()

describe('Risevest CreatePlans Page', () => {

    it(' Select the plans section on the application.', () => {
        cy.login(loginData.email, loginData.password); // user login
        createPlansPage.assertWait() // page loads for user to select the plans section
        createPlansPage.getPlans()  //select the plans feature from nav bar
        createPlansPage.assertWait() //User waits for plan page to load

    });

    it(' Filling in the require information ', () => {
        cy.login(loginData.email, loginData.password); // user login
        createPlansPage.getPlans()  //select the plans feature from nav bar
        createPlansPage.assertWaitPlans() //User waits for plan page to load
        createPlansPage.clickBuildWealthNavigation() // user clicks on the build wealth arrow icon
        createPlansPage.clickStartInvestButton() // user clicks on the startInvest button
        createPlansPage.selectNigeriaASCurrency() // user selects the Nigerian Naira currency on the page
        createPlansPage.enterPlansName(planData.name)
        createPlansPage.clickContinueButton() // user clicks on the continue button
        createPlansPage.enterPlanAmount(planData.amount)
        createPlansPage.continueButton() // user clicks on the continue button
        createPlansPage.enterInvestmentPercentage(planData.percentage) // user enters the investment percentage
        createPlansPage.continueButton()
        createPlansPage.retirementAge(planData.age)
        createPlansPage.continueButton()
        createPlansPage.selectPreference(planData.Preference)
        createPlansPage.continueButton()
        createPlansPage.assertPortfolio()
        createPlansPage.continueButton()
        createPlansPage.assertProjectionPage()
        createPlansPage.agree_ContinueButton()
        createPlansPage.assertReviewPage()
        createPlansPage.createPlanButton()
        createPlansPage.assertSuccessMessage()
        createPlansPage.clickViewPlanButton()
        createPlansPage.selectNoLater()
        createPlansPage.getPlans()
        createPlansPage.verifyPlanslist()

    });


})