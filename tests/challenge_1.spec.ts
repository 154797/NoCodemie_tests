import { test, expect } from "@playwright/test";
import { url } from "../app-settings.json";

const newPageTitle = "Home";
const rowSelector = '[data-component="Row"]';
const columnSelector = '[data-component="Column"]';
const textSelector = '[data-component="Text"]';

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
 await expect(page.locator(columnSelector).first()).toBeVisible();
});

test(`1.3 Drag a ‘Text’ component into your ‘1 Column’ component`, async ({
  page,
}) => {
await expect(page.locator(textSelector).first()).toBeVisible();
});

const textContent = `My first page`;

test(`1.4 Have the ‘Text’ component display the following text: ${textContent}`, async ({
  page,
}) => {
  await expect(page.locator(textSelector).first()).toHaveText("My first page");
});
