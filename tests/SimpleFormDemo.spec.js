import test from "@playwright/test"
test.only("SimpleFormDemo", async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    //await page.setViewportSize({ width: 1360, height: 600 })
    await page.locator("#single-input-field").fill("Welcome to DemoPage")
    await page.getByRole("button", {name:"Show Message"}).click()
    await page.locator("//input[@placeholder='Enter Value']").nth(0).fill("10")
    await page.locator("//input[@placeholder='Enter Value']").nth(1).fill("5")
    await page.getByRole("button", {name:"Get Total"}).click()
    await page.waitForTimeout(5000)
})