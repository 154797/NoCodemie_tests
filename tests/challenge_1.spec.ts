import { test, expect } from "@playwright/test";
import { url } from "../app-settings.json";


const newPageTitle = "Home";

test.beforeEach(async ({ page }) => {
  const newPageUrl = url + "/" + newPageTitle.toLocaleLowerCase();
  await page.goto(newPageUrl);

});

test(`1.1 Create a new blank page and name it ${newPageTitle}`, async ({
  page,
}) => {
  const rootElement = page.locator("id=app");
  await expect(rootElement, "page is create and compiled").toBeDefined();
  await page.waitForTimeout(3000);
});

test(`1.2 Drag a ‘1 Column’ component onto your page`, async ({ page }) => {
  const row = await page.locator(`[data-component="Row"]`).nth(0);
  await expect(row).toBeVisible();
  await page.waitForTimeout(2000);
  const column = page.locator(`[data-component="Column"]`).nth(0);
  await expect(column).toBeVisible();
  await page.waitForTimeout(2000);
});

test(`1.3 Drag a ‘Text’ component into your ‘1 Column’ component`, async ({
  page,
}) => {
  const text = page.locator(`[data-component="Text"]`).nth(0);
  await expect(text).toBeVisible();
  await page.waitForTimeout(3000);
});

