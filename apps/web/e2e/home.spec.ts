import { expect, test } from "@playwright/test";

test("renders the KomZot home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "KomZot" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Shared @komzot/ui button" })).toBeVisible();
});
