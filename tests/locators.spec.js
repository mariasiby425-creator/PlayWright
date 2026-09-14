import test from "@playwright/test"
test.only("locators", async ({page}) => {        //test function  : .only - adding preference
await page.goto("https://selenium.qabible.in/form-submit.php")
//await page.pause() // pause the execution
await page.locator("#validationCustom01").fill("MARIA")       //locate by id, use #
await page.locator(".form-control").nth(1).fill("AJITH")      //locate by class, use .
await page.locator("[placeholder='Username']").fill("ELO001")   //attribute=value [placeholder]
await page.locator("//input[@placeholder='City']").fill("KOTTAYAM")  //xpath
await page.getByPlaceholder("State").fill("KERALA")     //getByPlaceholder - locator method
await page.getByLabel("Zip").fill("686545")  
await page.locator("#invalidCheck").click()                    //use click() or check()
await page.getByRole("button", {name:"Submit form"}).click()    //getByRole
await page.waitForTimeout(3000)
})
//locators :uniquely finds a web elements