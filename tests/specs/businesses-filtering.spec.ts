const { test, expect, beforeEach, afterEach } = require("@playwright/test");
const assert = require("assert");
import LoginPage from "../pages/login.page";
import ForSalePage from "../pages/for-sale.page";

const validEmail = process.env.USER_EMAIL!;
const validPassword = process.env.USER_PASSWORD!;

const validMinAskingPrice = 6000000;
const validMaxAskingPrice = 8000000;
const validMinMultiple = 10;
const validMaxMultiple = 30;
const validMinTTMProfit = 1000000;
const validMaxTTMprofit = 1300000;
const validMinTTMrevenue = 5000000;
const validMaxTTMrevenue = 9000000;

test("Businesses filtering", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const forSalePage = new ForSalePage(page);

  // Open the «Login» page
  await loginPage.openLoginURL();

  // Enter valid credentials
  await loginPage.isEmailInputDisplayed();
  await loginPage.fillEmailField(validEmail);
  await loginPage.isContinueEmailButtonDisplayed();
  await loginPage.clickContinueEmailButton();
  await loginPage.isPasswordInputDisplayed();
  await loginPage.fillPasswordField(validPassword);
  await loginPage.isContinuePasswordButtonDisplayed();
  await loginPage.clickContinuePasswordButton();
  await forSalePage.waitForTimeout(1000);

  // Open the «For Sale» Page
  await forSalePage.openForSaleURL();

  // Open the «Filter listings» Window
  await forSalePage.waitForTimeout(500);
  await forSalePage.isFiltersButtonDisplayed();
  await forSalePage.clickFiltersButton();

  // Verify the «Filter listings» Window is displayed
  await forSalePage.areFiltersSidebarElementsDisplayed();

  // Enter the valid asking prices
  await forSalePage.fillMinAskingPriceField(validMinAskingPrice.toString());
  await forSalePage.fillMaxAskingPriceField(validMaxAskingPrice.toString());
  await forSalePage.clickShowListingsButton();

  // Verify the businesses display according to the asking price filter
  await assert.strictEqual(
    await forSalePage.checkBusinessPriceRange(
      validMinAskingPrice,
      validMaxAskingPrice
    ),
    true
  );

  // Reset filters
  await forSalePage.clickFiltersButton();
  await forSalePage.clickResetFiltersButton();

  // Enter the valid annual multiple
  await forSalePage.fillMinMultipleField(validMinMultiple.toString());
  await forSalePage.fillMaxMultipleField(validMaxMultiple.toString());
  await forSalePage.clickShowListingsButton();

  // Verify the businesses display according to the annual multiple filter
  await assert.strictEqual(
    await forSalePage.checkAnnualMultipleRange(
      validMinMultiple,
      validMaxMultiple
    ),
    true
  );

  // Reset filters
  await forSalePage.clickFiltersButton();
  await forSalePage.clickResetFiltersButton();

  // Enter the valid TTM Profit
  await forSalePage.fillMinTTMprofitField(validMinTTMProfit.toString());
  await forSalePage.fillMaxTTMprofitField(validMaxTTMprofit.toString());
  await forSalePage.clickShowListingsButton();

  // Verify the businesses display according to the TTM Profit filter
  await assert.strictEqual(
    await forSalePage.checkTTMprofitRange(validMinTTMProfit, validMaxTTMprofit),
    true
  );

  // Reset filters
  await forSalePage.clickFiltersButton();
  await forSalePage.clickResetFiltersButton();

  // Enter the valid TTM Revenue
  await forSalePage.fillMinTTMrevenueField(validMinTTMrevenue.toString());
  await forSalePage.fillMaxTTMrevenueField(validMaxTTMrevenue.toString());
  await forSalePage.clickShowListingsButton();

  // Verify the businesses display according to the TTM Revenue filter
  await assert.strictEqual(
    await forSalePage.checkTTMrevenueRange(
      validMinTTMrevenue,
      validMaxTTMrevenue
    ),
    true
  );

  // Reset filters
  await forSalePage.clickFiltersButton();
  await forSalePage.clickResetFiltersButton();
});
