import {test,expect} from "@playwright/test"
test("AlertsAndModals", async({page})=>{
await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
await page.locator(".btn.btn-primary").first().click()   //2 class names are used to locate the button so use 2 dots(.) in between the class names 
//modal
const modal=page.locator("#exampleModalCenter") //modal locator, considered as parent 
await expect(modal).toBeVisible()  
await modal.locator(".btn.btn-secondary").click()  //child locator, to click on close button 
await page.waitForTimeout(2000)
})