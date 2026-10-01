import {test,expect} from "@playwright/test"
test("JavaScriptAlert", async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on("dialog",async(dialog)=>{
        console.log(dialog.message())  //to get the message of the alert
        await page.waitForTimeout(3000)
        //await dialog.accept()  //to accept the alert
        await dialog.dismiss() 
})
await page.locator(".btn.btn-warning").click()  
await page.waitForTimeout(2000)
})