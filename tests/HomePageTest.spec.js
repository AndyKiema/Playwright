const {test,expect}=require('@playwright/test');

test('Homepage',async({page})=>{
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://demoblaze.com/');
  await page.close();
})