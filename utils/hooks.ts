import { Browser, BrowserContext, Page} from '@playwright/test';

export class Hooks {
    browser: Browser | undefined;
    context: BrowserContext | undefined;
    page: Page | undefined;

    /** 
     * initialization before all test
     */
    async beforeAll(browserInstance: Browser) {
        this.browser = browserInstance;
        this.context = await this.browser.newContext({
            viewport: { width: 1366,height:768},
            ignoreHTTPSErrors: true,
            recordVideo: {dir: "test-results"}
            });
         this.page = await this.context.newPage();
    }
}