import { test, expect } from '@playwright/test';

test('oldfiles', async ({ page }) => {

      // Approach 1
 const filePath = 'tests/Upload/testdata/dummy.txt';

   
// construct an absolute path using path.join() - Approach 2
//------------------------------------------------------------

//  import path from 'path';
// const filePath = path.join(
//   process.cwd(),
//   'tests',
//   'Upload',
//   'testdata',
//   'dummy.txt'
// );

    await page.goto('http://127.0.0.1:5500/tests/Upload/oldfileupload.html');
    
    //await page.locator('#fileInput').setInputFiles(filePath);

    await page.setInputFiles("#fileInput",filePath)
    await page.locator('button[type="submit"]').click();

    

    await expect(page.locator('#fileName')).toContainText('dummy');
});

             
