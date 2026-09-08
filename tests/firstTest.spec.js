import {test} from "@playwright/test"
test("FirstTest",async({browser})=>{    //browser is a fixture
const context=await browser.newContext()
const page=await context.newPage()
await page.goto('https://www.amazon.in/')
})