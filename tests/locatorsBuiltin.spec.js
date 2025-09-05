const {test,expect}=require('@playwright/test');

test('Built-in Locators',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const logo=await page.getByAltText('company-branding'); //locate an image using its text alternative
  await expect (logo).toBeVisible();

  const usernameField= await page.getByPlaceholder('Username');
  await usernameField.fill('Admin');

  const passwordField=await page.getByPlaceholder('Password');
  await passwordField.fill('admin123');

  await page.getByRole('button',{type:'submit'}).click();

  const name=await page.locator("//p[@class='oxd-userdropdown-name']");

  console.log(await name.textContent());
  await expect(name).toBeVisible();
})