import {test,expect} from "@playwright/test"
test("selectInputDemo", async({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php") 
    //await page.getByRole("combobox",{name:"Select Color"}) //selectOption() method to select the value from dropdown
    const selectBox=page.locator("#single-input-field")
    await selectBox.selectOption("Red")
    const selectedColour=page.locator("#message-one") 
    const message= await selectedColour.textContent()
    console.log(message)
    await expect(message).toContain("Red") 
    await page.waitForTimeout(2000)
}) 