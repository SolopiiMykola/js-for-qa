import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";

fixture `Registration page tests`
    .page("http://ip-5236.sunline.net.ua:38015/create_account")
    

test.only.meta({
    page: "Registration"
})('Valid registraion', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    await t
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg, 'Invalid message')
        .expect(expectedPageUrl()).contains('http://ip-5236.sunline.net.ua:38015/');
});

test.meta({
    feature: "Registration"
})('All fields test', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    await t
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('US registration test', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    const randomState = Math.floor(Math.random() * await Selector('[name="zone_code"] option').count);

    await t
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(await Selector('[name="zone_code"] option').nth(randomState))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")

        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});
