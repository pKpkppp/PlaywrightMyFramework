import { test, expect } from '@playwright/test';

test('Login to Setuos Application', async ({ page }) => {

  // Test Timeout
  test.setTimeout(60000);

  // Navigate to Login Page
  await page.goto('https://setuosuat.easysys.co.uk/login');

  // Wait for Login Form
  await expect(
    page.getByRole('textbox', { name: 'Enter your username' })
  ).toBeVisible();

  // Enter Username
  await page
    .getByRole('textbox', { name: 'Enter your username' })
    .fill('admin');

  // Enter Password
  await page
    .getByRole('textbox', { name: 'Enter your password' })
    .fill('admin123');

  // Show Password (Optional)
  const eyeButton = page.getByRole('button', { name: '👁' });

  if (await eyeButton.isVisible()) {
    await eyeButton.click();
  }

  // Click Login
  await page
    .getByRole('button', { name: /Sign In/i })
    .click();

  // Wait for page navigation
  await page.waitForLoadState('domcontentloaded');

  // Validate Login Success
  await expect(page).not.toHaveURL(/login/i);

  // Optional: Verify Dashboard Element
  // await expect(page.getByText('Dashboard')).toBeVisible();

});