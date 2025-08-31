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

test('Ui controls' , async ({page})=> {
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName = page.locator("#username");
   const signIn= page.locator("#signInBtn");
   const dropdown= page.locator('select.form-control');
   const documentsLink=page.locator('[href*="documents-request"]');
   await dropdown.selectOption('consult');
   await page.locator('.radiotextsty').last().click();
   await page.locator('#okayBtn').click()


   // if you want to try that radio button is checked or then you can use bolien with consol.log which is not assersation 
   console.log(await page.locator('.radiotextsty').last().isChecked());

   // if you want asseration then use this 
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   await page.locator('#terms').click();
   await expect(page.locator('#terms')).toBeChecked();
   await page.locator('#terms').uncheck();
   expect(await page.locator('#terms').isChecked()).toBeFalsy();
   await expect(documentsLink).toHaveAttribute('class', 'blinkingText');
   
   // await page.pause();


})
test.only('chlid windowshandling' , async ({page})=> {
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   


})