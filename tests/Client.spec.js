const {test, expect}= require('@playwright/test');


test.only('First playwright Test case' , async ({browser})=> {
//    chorom - Plugins / cookies
  const context= await browser.newContext();
  const page = await context.newPage();

// variable declaration
  const useremail=page.locator('#userEmail');
  const userpassword=page.locator("#userPassword");
  const loginBtn=page.locator('#login');
  const cardTitles=page.locator('.card-body b');


  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await useremail.fill('duxaqeq@mailinator.com')
  await userpassword.fill('Test@12345')
  await loginBtn.click()
  console.log('Cardbdy1:::',await cardTitles.first().textContent())
  console.log('allcardnam:', await cardTitles.allTextContents())

})