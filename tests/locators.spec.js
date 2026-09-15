import {test, expect} from "@playwright/test"
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
const submitMessage=page.locator(".my-2")         //locate our locator to a variable 
await expect(submitMessage).not.toBeVisible()    //assertion - to check if the locator is not visible or not
await page.getByRole("button", {name:"Submit form"}).click()    //getByRole
//const submitMessage=page.locator(".my-2")  
const message=await submitMessage.textContent()   // textcontent method to get the text value of locator
console.log(message)
await expect(submitMessage).toBeVisible()         //assertion - to check if the locator is visible or not
await expect(submitMessage).toHaveText("Form has been submitted successfully!")  //assertion - to check if the locator has the expected text or not
//await expect(submitMessage).toHaveText(message)
await expect(message).toContain("success")  //to check if the actual result contain the expected result or not, check sub string from received string
await page.waitForTimeout(3000)
})
//locators :uniquely finds a web element