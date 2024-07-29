const {test, expect} = require('@playwright/test');


test('shyam test',async ({browser})=>{
//console.log('Vaigasi Nilavae');
const context =await browser.newContext();
const page =await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 console.log( await page.title ());
 await page.locator("input[id='username']").fill("rahulshettyacademy");
 await page.locator("input[id='password']").fill("learning");
 await page.pause();
 const ddn= await page.locator("select.form-control");
 await ddn.selectOption("Teacher");
 await page.locator("[class='radiotextsty']").last().check();
 await page.pause();
 await page.locator("#okayBtn").click();
 //await page.locator("#signInBtn").click();
 
 //await console.log( await page.locator("[style*='block']").textContent() );
 //await expect ( await page.locator("[style*='block']").textContent() ).toContain('Incorrect');
 //await console.log(await page.locator("div[class='card-body'] > h4 >a ").nth(0).textContent());


})


test.only('shyam test 2',async ({browser})=>{
    //console.log('Vaigasi Nilavae');
    const context =await browser.newContext();
    const page =await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await console.log( await page.title ());
     await page.locator("//input[@id='userEmail']").fill("tester7001@gmail.com");
     await page.locator("[type='password']").fill("Test!234");
    // page.pause();
     await page.locator("[type='submit']").click();
     await page.waitForLoadState('networkidle');
      const products= await page.locator("div[class='card-body']");

      //const all = await page.locator("div[class='card-body']  b").allTextContents();
     //await console.log(all);
      
     const count=await  products.count();
    // await page.pause();


    for(let i=0;i<count;i++)
        {
        await console.log( await products.nth(i).locator("//i[contains(@class,'fa fa-shopping-cart')]/parent::button").textContent() );
         
   
        }

     for(let i=0;i<count;i++)
     {
       if(await products.nth(i).locator("b").textContent()  =="ZARA COAT 3" )
       {
        await products.nth(i).locator("//i[contains(@class,'fa fa-shopping-cart')]/parent::button").click();
       
       break;
       }
       

       

     }
     //await console.log( await page.locator("[style*='block']").textContent() );
     //await expect ( await page.locator("[style*='block']").textContent() ).toContain('Incorrect');
     //await console.log(await page.locator("div[class='card-body'] > h4 >a ").nth(0).textContent());
    // await page.pause();
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const janu= await page.locator("h3:has-text('Zara COAT 3')").isVisible();
    expect(janu).toBeTruthy();
    
    })