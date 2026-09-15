import test from "@playwright/test"
test("SimpleFormDemo", async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    //await page.setViewportSize({ width: 1360, height: 600 })
    await page.locator("#single-input-field").fill("Welcome to DemoPage")
    await page.getByRole("button", {name:"Show Message"}).click()
    await page.locator("//input[@placeholder='Enter Value']").first().fill("10")
    await page.locator("//input[@placeholder='Enter Value']").last().fill("5")
    await page.getByRole("button", {name:"Get Total"}).click()
    await page.waitForTimeout(5000)
})

//assertions - combining expectation and actual result eg.in a button click