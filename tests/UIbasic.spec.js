const {test, expect}= require('@playwright/test');


test('First playwright Test case' , async ({browser})=> {
//    chorom - Plugins / cookies
  const context= await browser.newContext();
  const page = await context.newPage();
   const userName = page.locator("#username");
   const signIn= page.locator("#signInBtn");
   const cardsTitels=page.locator('.card-body a')
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());   
//    css
   await userName.fill("Rahulshetty");
   await page.locator("#password").fill("Learning");
   await signIn.click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");   
//    login with right password
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await page.locator("#password").fill("learning");
   await signIn.click();
   console.log(await cardsTitels.first().textContent());
   console.log(await cardsTitels.nth(1).textContent());
   const allTitle=await cardsTitels.allTextContents();
   console.log(allTitle);
   
})

// test('page playwright test' , async ({page})=> {
//      await page.goto("https:www.google.com")
// //      get assersation
// console.log(await page.title());     
//     await expect(page).toHaveTitle('Google')

// })