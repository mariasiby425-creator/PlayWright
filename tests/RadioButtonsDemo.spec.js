import {test,expect} from "@playwright/test"
test("RadioButtonsDemo", async ({page})=>{
    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    await page.locator("#inlineRadio2").check()  //check() method to check the radio button - Female
    await page.getByRole("button",{name:"Show Selected Value"}).click()  //Button click
    const buttonClickedMessage=page.locator("#message-one")         //Button Click message
    const message= await buttonClickedMessage.textContent()
    console.log(message)
    await expect(message).toContain("'Female' is checked")        //toContain assertion to check button click msg
    await page.waitForTimeout(2000)
})