import loginData from "../../cypress/fixtures/loginData.json";
import PlansPage from "../pom/PlansPage";

const plansPage = new PlansPage()

describe('Risevest Plans Page', () => {

    it(' Select the plans and verify the existing plan section on the application.', () => {
        cy.login(loginData.email, loginData.password); // user login
        plansPage.wait()
        plansPage.selectPlans()  //select the plans feature from nav bar
        plansPage.verifyPlans() // verify existing plans are displayed
        plansPage.waitForPlans() // wait for page to load

    });


})