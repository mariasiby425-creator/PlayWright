import test from "@playwright/test"
test.only("locators", async ({page}) => {        //test function  : .only - adding preference
await page.goto("https://selenium.qabible.in/form-submit.php")
await page.locator("#validationCustom01").fill("Elora")
//await page.pause() // pause the execution
await page.waitForTimeout(3000)
})
//locators :uniquely finds a web elements