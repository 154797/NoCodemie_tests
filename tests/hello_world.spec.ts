const { test, expect } = require("@playwright/test");
import appSettings from "../app-settings.json";

test(`Hello world`, async ({ page }) => {
  await page.goto(appSettings.url);
  const text = await page.locator('[data-component="Text"]');
  await expect(text).toHaveText("Hello, World!");
});
