import { test as setup } from '@playwright/test';

/**
 * Seed test for Setu-OS login setup
 * This test logs in with admin credentials and stores the auth state
 * to be reused in other tests
 */

setup('Login to Setu-OS', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://setuosuat.easysys.co.uk/login');

  // Wait for login page to be ready
  await page.waitForLoadState('networkidle');

  // Enter username
  await page.fill('input[placeholder="Enter your username"]', 'admin');

  // Enter password
  await page.fill('input[placeholder="Enter your password"]', 'admin123');

  // Click Sign In button
  await page.click('button:has-text("Sign In")');

  // Wait for dashboard to load
  await page.waitForURL('**/dashboard', { timeout: 10000 });
  await page.waitForLoadState('networkidle');

  // Verify successful login
  await page.waitForSelector('text=Welcome back');
});
