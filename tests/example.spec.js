// @ts-check
const { test, expect } = require('@playwright/test');




test.only('locator mastery' ,async ({ page }) => {
  await test.step('Given user login', async () => {
    await page.goto('https://playwright.dev/');
  });
  


  await page.getByRole('link', { name: 'Get started' }).waitFor()
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIzOTBqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8');
 // await page.getByRole('button', { name: 'Google Search' }).click();


});