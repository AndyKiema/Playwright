const {test,expect}=require('@playwright/test');

test('Locators',async({page})=>{
  await page.goto('https://demoblaze.com/');
  await page.click('id=login2');//Click on login button
  await page.fill('#loginusername','andrewk');//Input username
  await page.fill('#loginpassword','mypassword'); //Input password
  await page.click("//button[normalize-space()='Log in']");
  const logOut=await page.locator("(//a[normalize-space()='Log out'])[1]");
  await expect(logOut).toBeVisible();
})
