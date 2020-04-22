
export const BaseUrl = 'http://ip-5236.sunline.net.ua:38015/';
import { ClientFunction, t } from "testcafe";

export default class BasePage {
    async navigateTo(url) {
        await t.navigateTo(url);
    }

    getCurrentUrl = ClientFunction(() => document.location.href);
}