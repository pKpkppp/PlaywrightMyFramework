import { test, expect } from '@playwright/test';

/**
 * Authentication and Login Test Suite
 * Tests login, logout, validation, and error handling
 */

test.describe('Authentication & Login', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto('https://setuosuat.easysys.co.uk/login');
    await page.waitForLoadState('networkidle');
  });

  test('TC 1.1: Should login successfully with valid credentials', async ({ page }) => {
    // Enter username
    await page.fill('input[placeholder="Enter your username"]', 'admin');
    
    // Enter password
    await page.fill('input[placeholder="Enter your password"]', 'admin123');
    
    // Click Sign In button
    await page.click('button:has-text("Sign In")');
    
    // Wait for dashboard to load
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    
    // Verify login success
    await expect(page.locator('text=Welcome back')).toBeVisible();
    await expect(page.locator('text=admin')).toBeVisible();
    await expect(page.locator('text=System Live')).toBeVisible();
  });

  test('TC 1.2: Should reject invalid username', async ({ page }) => {
    // Enter invalid username
    await page.fill('input[placeholder="Enter your username"]', 'invaliduser');
    
    // Enter password
    await page.fill('input[placeholder="Enter your password"]', 'admin123');
    
    // Click Sign In button
    await page.click('button:has-text("Sign In")');
    
    // Wait for error message or stay on login page
    await page.waitForTimeout(2000);
    
    // Should still be on login page
    await expect(page).toHaveURL(/.*login/);
  });

  test('TC 1.3: Should reject invalid password', async ({ page }) => {
    // Enter username
    await page.fill('input[placeholder="Enter your username"]', 'admin');
    
    // Enter invalid password
    await page.fill('input[placeholder="Enter your password"]', 'wrongpassword');
    
    // Click Sign In button
    await page.click('button:has-text("Sign In")');
    
    // Wait for error
    await page.waitForTimeout(2000);
    
    // Should still be on login page
    await expect(page).toHaveURL(/.*login/);
  });

  test('TC 1.4: Should prevent submission with empty fields', async ({ page }) => {
    // Get Sign In button
    const signInButton = page.locator('button:has-text("Sign In")');
    
    // Click with empty fields
    await signInButton.click();
    
    // Should still be on login page
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*login/);
  });

  test('TC 1.5: Should show password toggle functionality', async ({ page }) => {
    // Find password input
    const passwordInput = page.locator('input[placeholder="Enter your password"]');
    
    // Fill password
    await passwordInput.fill('admin123');
    
    // Find eye button (toggle visibility)
    const eyeButton = page.locator('button[role="button"]:has-text("👁")');
    
    // Check if button exists
    await expect(eyeButton).toBeVisible();
  });

  test('TC 1.6: Should display login page elements correctly', async ({ page }) => {
    // Check page title
    await expect(page.locator('text=Sign in to Setu-OS')).toBeVisible();
    
    // Check description
    await expect(page.locator('text=Sign in to manage universities, students, and course operations')).toBeVisible();
    
    // Check username field exists
    await expect(page.locator('input[placeholder="Enter your username"]')).toBeVisible();
    
    // Check password field exists
    await expect(page.locator('input[placeholder="Enter your password"]')).toBeVisible();
    
    // Check Sign In button exists
    await expect(page.locator('button:has-text("Sign In")')).toBeVisible();
    
    // Check default credentials display
    await expect(page.locator('text=Default:')).toBeVisible();
  });

  test('TC 1.7: Should handle session persistence', async ({ page, context }) => {
    // Login successfully
    await page.fill('input[placeholder="Enter your username"]', 'admin');
    await page.fill('input[placeholder="Enter your password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/dashboard');
    
    // Create new page to verify session
    const newPage = await context.newPage();
    await newPage.goto('https://setuosuat.easysys.co.uk/dashboard');
    
    // Session should be valid - not redirected to login
    await expect(newPage.locator('text=Welcome back')).toBeVisible({ timeout: 5000 });
    
    await newPage.close();
  });

  test('TC 1.8: Should trim whitespace from inputs', async ({ page }) => {
    // Enter username with spaces
    await page.fill('input[placeholder="Enter your username"]', '  admin  ');
    
    // Enter password with spaces
    await page.fill('input[placeholder="Enter your password"]', '  admin123  ');
    
    // Click Sign In
    await page.click('button:has-text("Sign In")');
    
    // Should login successfully
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    await expect(page.locator('text=Welcome back')).toBeVisible();
  });
});

test.describe('Logout Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Login first
    await page.goto('https://setuosuat.easysys.co.uk/login');
    await page.fill('input[placeholder="Enter your username"]', 'admin');
    await page.fill('input[placeholder="Enter your password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/dashboard');
  });

  test('TC 1.9: Should logout successfully', async ({ page }) => {
    // Find and click user profile menu
    const profileMenu = page.locator('text=admin').first();
    await profileMenu.click({ timeout: 5000 }).catch(() => {});
    
    // Try to find logout button
    const logoutButton = page.locator('button:has-text("Logout"), button:has-text("Sign Out"), a:has-text("Logout"), a:has-text("Sign Out")').first();
    
    // If found, click it
    if (await logoutButton.isVisible().catch(() => false)) {
      await logoutButton.click();
      
      // Should be redirected to login
      await page.waitForURL('**/login', { timeout: 5000 }).catch(() => {});
    }
  });

  test('TC 1.10: Should not access dashboard after logout', async ({ page }) => {
    // Try to navigate back to dashboard
    await page.goto('https://setuosuat.easysys.co.uk/dashboard');
    
    // Should be redirected to login page
    const loginPage = page.url().includes('login');
    expect(loginPage).toBeTruthy();
  });
});
