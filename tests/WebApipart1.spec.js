const { test, expect , request } = require('@playwright/test');

const loginPayload = { 
  userEmail: "zexola@mailinator.com", 
  userPassword: "Test@123" 
};

// ✅ Corrected payload structure
const orderPayload = {
  orders: [
    { country: "British Indian Ocean Territory", productOrderedId: "68a961459320a140fe1ca57a" }
  ]
};

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  // Login
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: loginPayload }
  );
  expect(loginResponse.ok(), "❌ Login failed").toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
  console.log("✅ Token received");

  // Create Order
  const orderResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: orderPayload,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  
  const responseBody = await orderResponse.json();
  console.log("🧾 Order Response:", responseBody);
  
  // ✅ Adjust extraction based on actual response
  orderId =
    responseBody.orders?.[0]?.orderId ||
    responseBody.order?.id ||
    responseBody.orderId ||
    responseBody.orders?.[0];
  
  // Validate
  expect(orderId, "❌ Order ID not found in API response").toBeTruthy();
  console.log("✅ Order Created:", orderId);
  
});


test.beforeEach(()=>
  {
  
  
  })


test('First playwright Test case', async ({ browser }) => {
  //    chorom - Plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript(value =>{
    window.localStorage.setItem("token",value)

  },token );

  // variable declaration
  await page.goto("https://rahulshettyacademy.com/client/#/auth/");


  
    await page.locator('button[routerlink="/dashboard/myorders"]').click();
    await page.locator('tbody').waitFor();
    // const findrow = await page.locator('.table tbody tr th').count()
    // await page.locator('table tbody tr th').first().waitFor({ state: 'visible' });
    // const rowCount = await page.locator('table tbody tr th').count();

    // for(let i=0; i<rowCount; i++){
    //       const text = await page.locator("table tbody tr th").nth(i).textContent();
    //       if(text === orderID ){
    //         console.log("idtext",text)
    //         break;

    //       }

    // }
    await page.locator('tbody tr').first();
    const rows = await page.locator("tbody tr");
    const rowCount = await rows.count();
     console.log("👉 Total Rows Found:", rowCount);
     for (let i = 0; i < rowCount; i++) {
  const rowOrderId = (await rows.nth(i).locator("th").textContent()).trim();

  const cleanRowId = rowOrderId.replace(/\|/g, "").trim();
  const cleanOrderId = (orderId || "").toString().replace(/\|/g, "").trim();


  console.log("🔍 Comparing:", cleanRowId, "==", cleanOrderId);

  if (cleanRowId === cleanorderId) {
    console.log("✅ Matched Order ID:", cleanRowId);
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
      //  const orderidDetails= await page.locator('.col-text').textContent();
      //  expect(orderID.includes(orderidDetails)).toBeTruthy();






  // if we want to wait for specific element use .waitfor() eg;
  // await cardsTitels.first().waitFor();

  // console.log('Cardbdy1:::',await cardTitles.first().textContent());
  // console.log('allcardnam:', await cardTitles.allTextContents());

})


