
const registrationPage = require("../pages/registration-page").default;
const userData = require("../data/user").userData;
import { BaseUrl } from "../pages/base-page";
import { t } from "testcafe";

const successMsg = 'Your customer account has been created';

fixture `Registration Page`
    .page(registrationPage.url);

test('Registration', async () => {
    await registrationPage.userRegistration(userData);
    await t.expect(await registrationPage.getRegistrationSuccessMsg()).eql(successMsg);
    await t.expect(await registrationPage.getCurrentUrl()).eql(BaseUrl);
});