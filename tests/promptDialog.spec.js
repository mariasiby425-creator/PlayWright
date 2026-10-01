import {test,expect} from "@playwright/test"
test("PromptDialog", async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on("dialog",async(dialog)=>{
        console.log(dialog.type())  //to get the type of the alert
        console.log(dialog.message()) 
        await page.waitForTimeout(3000) //to get the message of the alert
        await dialog.accept("Mariam")  //to accept the alert and send the text to the prompt dialog
       // console.log(dialog.value())  //to get the value entered in the prompt dialog
       
}) 
await page.locator(".btn.btn-danger").click()  
await page.waitForTimeout(2000)
})