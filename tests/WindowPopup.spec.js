import {test,expect} from "@playwright/test"
test("WindowPopup", async({page})=>{
await page.goto("https://selenium.qabible.in/window-popup.php")
const [newPage]=await Promise.all([                                     //first check if new page is opened or not, if yes then click on the button
    page.waitForEvent("popup"),  //wait for the popup to open
    await page.locator(".btn.btn-primary.windowSingle").click()  
]) 
await newPage.waitForLoadState
const parentPage=await page.title()  //to get the title of the new page
console.log("Parent Page Title is: "+parentPage)
const childPage=await newPage.title()  //to get the title of the new page
console.log("Child Page Title is: "+childPage)
await newPage.close()  //to close the child page
await page.waitForTimeout(2000)

})