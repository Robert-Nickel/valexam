import { test, expect } from '@playwright/test';
import { loginStudent} from './testLogin';

test.beforeEach(async ({ page }) => {
  await loginStudent(page)
});

test.describe('New Challenge Pool', () => {
  test('should allow me to create challenge pool then go there', async ({ page }) => {
    await page.locator('header button').click()
    await page.locator('aside >> text=Create').click();
    await page.locator('input').type("new challenge pool")
    await page.locator('button:has-text("Create")').click()
    await expect(page.locator('h1')).toHaveText('new challenge pool');
  });
})

test.describe('Delete Challenge Pool', () => {
  test('should allow me to delete challenge pool', async ({ page }) => {
    page.on('dialog', async dialog => {
      dialog.accept().catch(() => { });
    });
    await page.goto('http://localhost:3000/challengepool');
    await page.locator('text=challenge pool for deletion').click();
    await page.locator('text=Settings').click()
    await page.locator('text=Delete challenge pool for deletion').click()
    await page.waitForNavigation()
    await expect(page.locator('text=challenge pool for deletion')).not.toBeVisible()
  });
})