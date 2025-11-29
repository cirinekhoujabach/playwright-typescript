import { test, expect } from '@playwright/test';

test.describe('Login Page', () =>  {

    const baseURL = 'https://qatraining.fr/pages/features/login.html';

test('Should login successfully with valid credentials', async ({ page }) => {
await page.goto(baseURL);
await page.fill('#username', 'sirine');
await page.fill('#password', 'sirine123');
await page.click('//button[@type="submit"]');



});


});
