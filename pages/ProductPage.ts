import { test, expect , Locator , Page } from '@playwright/test';

export class ProductPage {
    readonly page : Page;
    //readonly handleCookie : Locator;
    readonly productButton : Locator;
    readonly productTextMsg : Locator;
    readonly viewButton : Locator;
    readonly writeReviewText: Locator;
    readonly nameInput : Locator;
    readonly emailAdress : Locator;
    readonly addReviewText : Locator;
    readonly submitBtn : Locator;
    readonly successMsg : Locator;

    constructor (page : Page) {
        this.page = page ;
       
       // this.handleCookie = page.locator('//p[normalize-space()="Consent"]')
        this.productButton = page.getByRole('link', { name: 'Products' });
        this.productTextMsg = page.locator('//h2[@class="title text-center"]');
        this.viewButton = page.locator('//div[@class="col-sm-9 padding-right"]//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]');
        this.writeReviewText = page.locator('//a[normalize-space()="Write Your Review"]');
        this.nameInput = page.locator('//input[@id="name"]');
        this.emailAdress = page.locator('//input[@id="email"]');
        this.addReviewText = page.locator('//textarea[@id="review"]');
        this.submitBtn = page.locator('//button[@id="button-review"]');
        this.successMsg = page.locator('//span[normalize-space()="Thank you for your review."]')
    }


     async clickOnProducts() {

        await this.productButton.click();
     }

     async expectAllProductText() {
     
        await expect(this.productTextMsg).toBeVisible;
     }
     

     async clickOnViewProduct() {

    await this.viewButton.click();
    }


     async expectWriteReviewText() {
        expect(this.writeReviewText).toBeVisible;
     }

     async fillReviewDetails(name : string , email: string , addText : string) {
        await this.nameInput.fill(name);
        await this.emailAdress.fill(email);
        await this.addReviewText.fill(addText)
        await this.submitBtn.click();
     }

    async expectSuccessReviewMsg() {
        expect(this.successMsg).toBeVisible;

    }
   
}