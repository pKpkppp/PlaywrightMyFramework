import { test, expect } from '@playwright/test';

test('Create Agent and Update KYC Status', async ({ page }) => {

  // -----------------------------
  // Test Data
  // -----------------------------
  const agentName = 'Test Agent';
  const agentEmail = `testagent${Date.now()}@yopmail.com`;

  // -----------------------------
  // Launch Application
  // -----------------------------
  await page.goto('https://studyglobeuat.easysys.co.uk/', {
    waitUntil: 'domcontentloaded'
  });

  // -----------------------------
  // Login
  // -----------------------------
  await page.locator('[data-testid="input-username"]')
    .waitFor({ state: 'visible' });

  await page.locator('[data-testid="input-username"]')
    .fill('manager1');

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="input-password"]')
    .fill('password123');

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="button-login"]')
    .click();

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // -----------------------------
  // Navigate to Add Agent
  // -----------------------------
  await page.locator('[data-testid="link-add-agent"]')
    .waitFor({ state: 'visible' });

  await page.locator('[data-testid="link-add-agent"]')
    .click();

  await page.waitForTimeout(2000);

  // -----------------------------
  // Fill Agent Information
  // -----------------------------
  await page.locator('[data-testid="input-agent-name"]')
    .waitFor({ state: 'visible' });

  await page.locator('[data-testid="input-agent-name"]')
    .fill(agentName);

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="input-agent-email"]')
    .fill(agentEmail);

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="input-agent-phone"]')
    .fill('8785757489');

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="select-agent-type"]')
    .selectOption({ label: 'Freelancer' });

  await page.waitForTimeout(1000);

  // Select Assigned User
  await page.locator('[data-testid="select-agent-assigned"]')
    .selectOption({ index: 1 });

  await page.waitForTimeout(1000);

  await page.locator('[data-testid="input-agent-password"]')
    .fill('Testagent56@');

  await page.waitForTimeout(1000);

  // -----------------------------
  // Address Details
  // -----------------------------
  const textboxes = page.getByRole('textbox');

  await textboxes.nth(4).fill('Noida');

  await page.waitForTimeout(1000);

  await textboxes.nth(5).fill('Noida');

  await page.waitForTimeout(1000);

  // Primary Address
  await page.locator('.form-control.addr-state')
    .first()
    .fill('Uttar Pradesh');

  await page.waitForTimeout(1000);

  await page.locator('.form-control.addr-postal')
    .first()
    .fill('201301');

  await page.waitForTimeout(1000);

  await page.locator('.form-control.addr-country')
    .first()
    .fill('India');

  await page.waitForTimeout(1000);

  // -----------------------------
  // Office Address
  // -----------------------------
  await page.locator(
    'div:nth-child(2) > div > .form-group > .form-control'
  ).first().fill('Noida');

  await page.waitForTimeout(1000);

  await page.locator(
    'div:nth-child(2) > div:nth-child(3) > div > .form-control'
  ).first().fill('Noida');

  await page.waitForTimeout(1000);

  await page.locator(
    'div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > .form-control'
  ).fill('Uttar Pradesh');

  await page.waitForTimeout(1000);

  await page.locator(
    'div:nth-child(2) > div:nth-child(4) > div > .form-control'
  ).first().fill('302903');

  await page.waitForTimeout(1000);

  // -----------------------------
  // Additional Address
  // -----------------------------
  await page.locator(
    'div:nth-child(3) > div > .form-group > .form-control'
  ).first().fill('Noida');

  await page.waitForTimeout(1000);

  await page.locator(
    'div:nth-child(3) > div:nth-child(3) > div > .form-control'
  ).first().fill('Noida');

  await page.waitForTimeout(1000);

  await page.locator(
    'div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > .form-control'
  ).fill('Uttar Pradesh');

  await page.waitForTimeout(1000);

  // -----------------------------
  // Submit Agent Form
  // -----------------------------
  await page.locator('[data-testid="button-submit-agent"]')
    .click();

  // Wait for API/UI update
  await page.waitForLoadState('networkidle');

  await page.waitForTimeout(3000);

  // -----------------------------
  // Validate Agent Creation
  // -----------------------------
  const createdAgent = page.getByText(agentEmail);

  await expect(createdAgent)
    .toBeVisible({ timeout: 10000 });

  // -----------------------------
  // Open Created Agent
  // -----------------------------
  await createdAgent.click();

  await page.waitForTimeout(2000);

  // -----------------------------
  // Update KYC Status
  // -----------------------------
  const kycDropdown = page.locator(
    '[data-testid="select-kyc-status"]'
  );

  await kycDropdown.selectOption('under_review');

  await page.waitForTimeout(1000);

  // Save Changes
  await page.locator('[data-testid="button-submit-agent"]')
    .click();

  await page.waitForLoadState('networkidle');

  await page.waitForTimeout(3000);

  // -----------------------------
  // Validate KYC Status
  // -----------------------------
  await expect(kycDropdown)
    .toHaveValue('under_review');

});