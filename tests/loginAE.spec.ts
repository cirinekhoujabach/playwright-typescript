import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Automation Exercice Login', () =>{
    test('Successful Login with valid credentials', async ({ page }) => {
       const login = new LoginPage(page);
       await login.goto();
       await login.login('qa.test.user02@exemple.com', 'qatester02');
       await login.expectLoginSuccess();
    });

     test('Login fails with invalid credentials', async ({ page }) => {
       const login = new LoginPage(page);
       await login.goto();
       await login.login('qa.test.user02@exemple.com', 'QWEqatester02');
       await login.expectLoginFailure();
  


});
});
