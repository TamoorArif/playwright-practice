const {test, expect}= require('@playwright/test');


test('First playwright Test case' , async ({browser})=> {
//    chorom - Plugins / cookies
   const context= await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());   
   
})

test('page playwright test' , async ({page})=> {
     await page.goto("https:www.google.com")
//      get assersation
console.log(await page.title());     
    await expect(page).toHaveTitle('Google')

})