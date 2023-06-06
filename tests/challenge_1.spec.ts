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
});

test(`1.2 Drag a ‘1 Column’ component onto your page`, async ({ page }) => {
  const row = await page.locator(`[data-component=Row]`).nth(0);
  await expect(row, "row should be in document").toBeVisible();

  await expect(
    row.locator(`[data-component=Column]`).nth(0),
    "column should be in document"
  ).toBeVisible();
  await page.waitForTimeout(2000);
});
