import {test, expect} from "@playwright/test"
test("checkBox", async ({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")   
    await page.getByRole("link", {name:"Input Form"}).click()
    await page.getByRole("link", {name:"Checkbox Demo"}).click() 
    const singleCheckbox=await page.getByRole("checkbox", {name:"Click on this check box"})  //getByRole - locator method
    await singleCheckbox.check()    //check() method to check the checkbox   
    const checkmessage=page.locator(".form-check-label").nth(0)
    const cmsg=await checkmessage.textContent() 
    await expect(checkmessage).toBeVisible()  //assertion - to check if the locator is visible or not
    console.log(cmsg)       

   const SuccessMessage=page.locator("#message-one") 
   const message=await SuccessMessage.textContent() 
   await expect(SuccessMessage).toHaveText(message) // textcontent method to get the text value of locator
   console.log(message)
   const result=await singleCheckbox.isChecked() //isChecked() method to check if the checkbox is checked or not
   console.log(result) 
   await expect(singleCheckbox).toBeChecked()  //assertion - to check if the checkbox is checked or not
   await expect(result).toBeTruthy()  //expect result must be true, if the checkbox is checked 
   //await expect(result).toBeFalsy()  //expect result must not be false, if the checkbox is checked 
   //await expect(result).not.toBeFalsy() 
   await page.waitForTimeout(2000)
})
