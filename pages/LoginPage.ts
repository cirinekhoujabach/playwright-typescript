import { test, expect , Locator , Page } from '@playwright/test';

export class LoginPage {
    readonly page : Page;
    readonly emailInput : Locator;
    readonly passwordInput: Locator;
    readonly loginButton : Locator;
    readonly loggedAsText : Locator;
    readonly errorMessage : Locator;

    constructor (page : Page) {
        this.page = page;
        this.emailInput = page.locator('//input[@data-qa="login-email"]');
        this.passwordInput = page.locator('//input[@placeholder="Password"]');
        this.loginButton = page.locator('//button[normalize-space()="Login"]');
        this.loggedAsText = page.locator('//*[contains(text), "Logged in as")]');
        this.errorMessage = page.locator('//*[contains(text), "Your email or password is incorrect!")]');
    } 
    
    async goto() {
        await this.page.goto('https://automationexercise.com/');
         await this.acceptCookieConsent(); 
    }

    async login(email: string , password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async acceptCookieConsent() {
    const consentButton = this.page.locator('button:has-text("Consent")');
    if (await consentButton.isVisible({ timeout: 3000 })) {
        await consentButton.click();
        // Attendre que la popup disparaisse après le clic
        await this.page.locator('.fc-consent-root').waitFor({ state: 'hidden', timeout: 5000 });
    }
}

    async expectLoginSuccess() {
        await expect(this.loggedAsText).toBeVisible();
    }

     async expectLoginFailure() {
        await expect(this.errorMessage).toBeVisible();
     } 
}