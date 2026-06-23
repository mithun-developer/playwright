import {test,expect} from '@playwright/test'

test.skip('cmds',async({page})=>{
 page.goBack() // To navigate broswer back
page.goForward() // To navigate broswer forward
page.setPermissions() //handle browser permissions by grant or deny

 //File handle
page.locator().setInputFiles() // set path to place input files
await page.locator('input[type="file"]').setInputFiles([  // set path to input multiple files
  'path/to/file1.txt',      
  'path/to/file2.txt'
])

//File Download
const downloadPromise = page.waitForEvent('download');
await page.click('#downloadBtn');
const download = await downloadPromise;
console.log(await download.path());

//Assertions
expect().toBe() // compare two values. Like equals of two strings etc.
expect().toBeTruthy() // Assert two boolean values to be true.
expect(page.locator()).toBeVisible() // Ensured specified locator is Visible on DOM
expect(page.locator()).toContainText() // Ensures the specific DOM element contains the given text
expect(page.locator()).toHaveCSS()   // Ensures the locator has specified css class
expect(page.locator()).toHaveCount() // Ensures the given locator count in dom should be equal to "count"
expect(page).toHaveTitle()

})



//API Validation
// const response =
// await page.waitForResponse(
// resp => resp.url().includes('/users')
// );

// expect(response.status()).toBe(200);

//------------------------------------------
         //API Validation Traditional way
// const response = await page.waitForResponse(

//   function(response){

//     return response.url().includes('/users');

//   }

// );



// For fake camera/microphone devices access

// const browser = await chromium.launch({
//     args: [
//         '--use-fake-ui-for-media-stream',
//         '--use-fake-device-for-media-stream'
//     ]
// });