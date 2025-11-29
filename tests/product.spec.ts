import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';


test.describe('Add review on product', () => {
    test('Successful review message', async ({ page }) => {
        const product = new ProductPage(page);
        const login = new LoginPage(page);
        await login.goto();
        //await page.pause();
        await product.clickOnProducts();
        await product.expectAllProductText();
        await product.clickOnViewProduct();
        await product.expectWriteReviewText();
        await product.fillReviewDetails('Admin', 'admin@gmail.com','good quality!');
        await product.expectSuccessReviewMsg();
    });
});
