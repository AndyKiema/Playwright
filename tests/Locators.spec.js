const {test,expect}=require('@playwright/test');

test('Locators with CSS',async({page})=>{
  await page.goto('https://demoblaze.com/');
  await page.click('id=login2');//Click on login button
  await page.fill('#loginusername','andrewk');//Input username
  await page.fill('#loginpassword','mypassword'); //Input password
})