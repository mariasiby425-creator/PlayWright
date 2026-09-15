import {test, expect} from "@playwright/test"
test("checkBox", async ({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")   
    await page.getByRole("link", {name:"Input Form"}).click()
    await page.getByRole("link", {name:"Checkbox Demo"}).click()
    await page.locator("#gridCheck").check()   //check() method to check the checkbox
    
    const checkmessage=page.locator(".form-check-label").nth(0)
    const cmsg=await checkmessage.textContent()
    await expect(checkmessage).toBeVisible()  //assertion - to check if the locator is visible or not
    console.log(cmsg)       

   const SuccessMessage=page.locator("#message-one") 
   const message=await SuccessMessage.textContent() 
   await expect(SuccessMessage).toHaveText(message) // textcontent method to get the text value of locator
   console.log(message)
    await page.waitForTimeout(2000)
})
