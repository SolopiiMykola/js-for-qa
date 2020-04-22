const BasePage = require("../pages/base-page").default;
import { Selector, t } from "testcafe";
import { BaseUrl } from "../pages/base-page";

class RegistrationPage extends BasePage {
    constructor() {
        super();
    }

    url = `${BaseUrl}create_account`;
    company = 'input[name="company"]';
    firstName = 'input[name="firstname"]';
    lastName = 'input[name="lastname"]';
    city = 'input[name="city"]';
    countryCode = 'select[name="country_code"]';
    email = '[name="customer_form"] [name="email"]';
    password = '[name="customer_form"] [name="password"]';
    confirmPassword = '[name="customer_form"] [name="confirmed_password"]';
    newsLetter = 'input[name="newsletter"]';
    createAccount = 'button[name="create_account"]';
    successMsg = '.alert.alert-success';
    loggedUser = 'li.account.dropdown > a';

    async userRegistration(userData) {
        await t.typeText(this.firstName, userData.firstName);
        await t.typeText(this.lastName, userData.lastName);
        await t.typeText(this.company, userData.company);
        await t
            .click(this.countryCode)
            .click(Selector('option').withAttribute('value', userData.countryCode));
        await t.typeText(this.email, userData.email);
        await t.typeText(this.password, userData.password);
        await t.typeText(this.confirmPassword, userData.confirmPassword);
        await t.click(this.newsLetter);
        await t.click(this.createAccount);
    }

    async getRegistrationSuccessMsg() {
        const text = await Selector(this.successMsg).innerText;
        return text.replace(/[^A-Za-z0-9]/g, ' ').trim();
    }
}

export default new RegistrationPage();