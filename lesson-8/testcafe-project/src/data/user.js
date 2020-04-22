
import * as faker from "faker";
const password = faker.internet.password(10);

exports.userData = {
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password,
    confirmPassword: password,
    countryCode: 'DE',
    company: faker.company.companyName()
};