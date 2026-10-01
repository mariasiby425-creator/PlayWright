import {test,expect} from "@playwright/test"
test("DatePicker", async({page})=>{
await page.goto("https://selenium.qabible.in/date-picker.php")
await page.locator("#single-input-field").click()  
await page.locator(".datepicker-days th.datepicker-switch").click()  //to click on the month and year 
await page.locator(".datepicker-months th.datepicker-switch").click()  //to click on the year 
const year=await page.locator(".datepicker-years .year").allTextContents()  //to get all the years in the date picker
console.log(year) 
const targetyear="2025"
const targetmonth=5
const targetdate=14
while(true) {
        const currentyear=await page.locator(".datepicker-years th.datepicker-switch").textContent() //to get all the years in the date picker
        console.log(currentyear) 
        const startyear=currentyear.split("-")[0] //to get the start year from the date picker
        console.log("Start Year is: "+startyear)
        const endyear=currentyear.split("-")[1] //to get the end year from the date picker
        console.log("End Year is: "+endyear)
        if(targetyear>=startyear && targetyear<=endyear)
        {
           break
        }
       
       if(targetyear<startyear)
        {
            await page.locator(".datepicker-years th.prev").click()  //to click on the previous button to go to the previous year range
        }
        else
        {
            await page.locator(".datepicker-years th.next").click()  //to click on the next button to go to the next year range
        }
    }        
    //await page.getByText(targetyear.toString(),{exact:true}).click()  //to click on the target year 
    await page.locator("span.year").filter({hasText: targetyear.toString()}).click()  //to click on the target year 
    await page.locator(".month").nth(targetmonth - 1).click()  //to click on the target month 
    //await page.locator(".day").nth(targetdate - 1).click()  //to click on the target date 
    await page.locator(".day").filter({hasText: targetdate.toString()}).click() 

    await page.locator("#button-one").click()  //to click on the submit button
    const msgShown=await page.locator("#message-one").textContent() //to get the message shown after clicking on the submit button
    console.log("Message shown is: "+msgShown)
    const inputBox=await page.locator("#single-input-field")
    const inputDate=await inputBox.inputValue()
    console.log("Input Date is:"+inputDate)
    await expect(msgShown).toContain(inputDate)
    //await expect(msgShown).toContain("07/05/2016")  //to verify the message shown after clicking on the submit button   
    
    
    await page.waitForTimeout(2000)

})