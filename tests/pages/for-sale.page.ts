import { Locator, expect } from "@playwright/test";
import BasePage from "./base-page";

class ForSalePage extends BasePage {
  public static URL = `${process.env.ENV}for-sale`;

  private readonly filtersButton: Locator;
  private readonly filterWindowTitle: Locator;
  private readonly askingPriceLabel: Locator;
  private readonly minAskingPriceLabel: Locator;
  private readonly maxAskingPriceLabel: Locator;
  private readonly minAskingPriceField: Locator;
  private readonly maxAskingPriceField: Locator;
  private readonly annualMultipleLabel: Locator;
  private readonly minMultipleLabel: Locator;
  private readonly maxMultipleLabel: Locator;
  private readonly minMultipleField: Locator;
  private readonly maxMultipleField: Locator;
  private readonly TTMprofitLabel: Locator;
  private readonly minTTMprofitLabel: Locator;
  private readonly maxTTMprofitLabel: Locator;
  private readonly minTTMprofitField: Locator;
  private readonly maxTTMprofitField: Locator;
  private readonly TTMrevenueLabel: Locator;
  private readonly minTTMrevenueLabel: Locator;
  private readonly maxTTMrevenueLabel: Locator;
  private readonly minTTMrevenueField: Locator;
  private readonly maxTTMrevenueField: Locator;
  private readonly businessPrice: Locator;
  private readonly TTMrevenue: Locator;
  private readonly TTMprofit: Locator;
  private readonly showListingsButton: Locator;
  private readonly resetFiltersButton: Locator;

  constructor(page) {
    super(page);

    this.filtersButton = page.locator("a[data-testid='filter-more']");
    this.filterWindowTitle = page.locator("//h3[text()='Filter listings']");
    this.askingPriceLabel = page.locator("//form//div/div[text()='Asking price']");
    this.minAskingPriceLabel = page.locator(
      "//label[text()='Min asking price']"
    );
    this.minAskingPriceField = page.locator(
      "//label[text()='Min asking price']/following-sibling::input"
    );
    this.maxAskingPriceLabel = page.locator(
      "//label[text()='Max asking price']"
    );
    this.maxAskingPriceField = page.locator(
      "//label[text()='Max asking price']/following-sibling::input"
    );
    this.annualMultipleLabel = page.locator("//form//div/div[text()='Annual multiple']");
    this.minMultipleLabel = page.locator("//label[text()='Min multiple']");
    this.minMultipleField = page.locator(
      "//label[text()='Min multiple']/following-sibling::input"
    );
    this.maxMultipleLabel = page.locator("//label[text()='Max multiple']");
    this.maxMultipleField = page.locator(
      "//label[text()='Max multiple']/following-sibling::input"
    );
    this.TTMprofitLabel = page.locator("//form//div/div[text()='TTM Profit']");
    this.minTTMprofitLabel = page.locator("//label[text()='Min TTM Profit']");
    this.minTTMprofitField = page.locator(
      "//label[text()='Min TTM Profit']/following-sibling::input"
    );
    this.maxTTMprofitLabel = page.locator("//label[text()='Max TTM Profit']");
    this.maxTTMprofitField = page.locator(
      "//label[text()='Max TTM Profit']/following-sibling::input"
    );
    this.TTMrevenueLabel = page.locator("//form//div/div[text()='TTM Revenue']");
    this.minTTMrevenueLabel = page.locator("//label[text()='Min TTM Revenue']");
    this.minTTMrevenueField = page.locator(
      "//label[text()='Min TTM Revenue']/following-sibling::input"
    );
    this.maxTTMrevenueLabel = page.locator("//label[text()='Max TTM Revenue']");
    this.maxTTMrevenueField = page.locator(
      "//label[text()='Max TTM Revenue']/following-sibling::input"
    );
    this.businessPrice = page.locator(
      "//div[text()='Business price']/following-sibling::div"
    );
    this.TTMrevenue = page.locator(
      "//div[text()='TTM Revenue']/following-sibling::div"
    );
    this.TTMprofit = page.locator(
      "//div[text()='TTM Profit']/following-sibling::div"
    );
    this.showListingsButton = page.locator(
      "button[data-testid='apply-filters-button']"
    );
    this.resetFiltersButton = page.locator(
      "button[data-testid='reset-filters-button']"
    );
  }

  public async openForSaleURL(): Promise<void> {
    await super.openURL(ForSalePage.URL);
  }

  public async isForSalePageOpened(): Promise<void> {
    await super.doesPageURLContainText("for-sale");
  }

  public async isFiltersButtonDisplayed(): Promise<void> {
    await super.isDisplayed(this.filtersButton);
  }

  public async areFiltersSidebarElementsDisplayed(): Promise<void> {
    await super.isDisplayed(this.filterWindowTitle);
    await super.isDisplayed(this.askingPriceLabel);
    await super.isDisplayed(this.minAskingPriceLabel);
    await super.isDisplayed(this.maxAskingPriceLabel);
    await super.isDisplayed(this.annualMultipleLabel);
    await super.isDisplayed(this.minMultipleLabel);
    await super.isDisplayed(this.maxMultipleLabel);
    await super.isDisplayed(this.TTMprofitLabel);
    await super.isDisplayed(this.minTTMprofitLabel);
    await super.isDisplayed(this.maxTTMprofitLabel);
    await super.isDisplayed(this.TTMrevenueLabel);
    await super.isDisplayed(this.minTTMrevenueLabel);
    await super.isDisplayed(this.maxTTMrevenueLabel);
    await super.isDisplayed(this.minAskingPriceField);
    await super.isDisplayed(this.maxAskingPriceField);
    await super.isDisplayed(this.minMultipleField);
    await super.isDisplayed(this.maxMultipleField);
    await super.isDisplayed(this.minTTMprofitField);
    await super.isDisplayed(this.maxTTMprofitField);
    await super.isDisplayed(this.minTTMrevenueField);
    await super.isDisplayed(this.maxTTMrevenueField);
    await super.isDisplayed(this.showListingsButton);
    await super.isDisplayed(this.resetFiltersButton);
  }

  public async clickFiltersButton(): Promise<void> {
    await super.click(this.filtersButton);
  }

  public async clickShowListingsButton(): Promise<void> {
    await super.click(this.showListingsButton);
  }

  public async clickResetFiltersButton(): Promise<void> {
    await super.click(this.resetFiltersButton);
  }

  public async fillMinAskingPriceField(value: string): Promise<void> {
    await super.setValue(this.minAskingPriceField, value);
  }

  public async fillMaxAskingPriceField(value: string): Promise<void> {
    await super.setValue(this.maxAskingPriceField, value);
  }

  public async fillMinMultipleField(value: string): Promise<void> {
    await super.setValue(this.minMultipleField, value);
  }

  public async fillMaxMultipleField(value: string): Promise<void> {
    await super.setValue(this.maxMultipleField, value);
  }

  public async fillMinTTMprofitField(value: string): Promise<void> {
    await super.setValue(this.minTTMprofitField, value);
  }

  public async fillMaxTTMprofitField(value: string): Promise<void> {
    await super.setValue(this.maxTTMprofitField, value);
  }

  public async fillMinTTMrevenueField(value: string): Promise<void> {
    await super.setValue(this.minTTMrevenueField, value);
  }

  public async fillMaxTTMrevenueField(value: string): Promise<void> {
    await super.setValue(this.maxTTMrevenueField, value);
  }

  public async checkBusinessPriceRange(
    minPrice: number,
    maxPrice: number
  ): Promise<boolean> {
    const businessPriceText = await this.getText(this.businessPrice);
    const businessPriceNumeric = parseFloat(
      businessPriceText.replace(/[^0-9.-]+/g, "")
    );
    const isInRange =
      businessPriceNumeric >= minPrice && businessPriceNumeric <= maxPrice;
    return isInRange;
  }

  public async checkAnnualMultipleRange(
    minRatio: number,
    maxRatio: number
  ): Promise<boolean> {
    const businessPriceText = await this.getText(this.businessPrice);
    const businessPriceNumeric = parseFloat(
      businessPriceText.replace(/[^0-9.-]+/g, "")
    );
    const TTMprofitText = await this.getText(this.businessPrice);
    const TTMprofitNumeric = parseFloat(
      TTMprofitText.replace(/[^0-9.-]+/g, "")
    );
    const ratio = businessPriceNumeric / TTMprofitNumeric;
    const isInRange = ratio >= minRatio && ratio <= maxRatio;
    return isInRange;
  }

  public async checkTTMprofitRange(
    minPrice: number,
    maxPrice: number
  ): Promise<boolean> {
    const TTMprofitText = await this.getText(this.TTMprofit);
    const TTMprofitNumeric = parseFloat(
      TTMprofitText.replace(/[^0-9.-]+/g, "")
    );
    const isInRange =
      TTMprofitNumeric >= minPrice && TTMprofitNumeric <= maxPrice;
    return isInRange;
  }

  public async checkTTMrevenueRange(
    minPrice: number,
    maxPrice: number
  ): Promise<boolean> {
    const TTMrevenueText = await this.getText(this.TTMrevenue);
    const TTMrevenueNumeric = parseFloat(
      TTMrevenueText.replace(/[^0-9.-]+/g, "")
    );
    const isInRange =
      TTMrevenueNumeric >= minPrice && TTMrevenueNumeric <= maxPrice;
    return isInRange;
  }
}

export default ForSalePage;
