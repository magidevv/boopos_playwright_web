import { Locator, expect } from "@playwright/test";
import BasePage from "./base-page";

class LoginPage extends BasePage {
  public static URL = `${process.env.ENV}?_gl=1*1n1aptk*_ga*MTMzMDExNDg3Ny4xNzAwNDkyMTU4*_ga_1LX47SZWXS*MTcwMDU3NzE4OS4xMC4xLjE3MDA1NzcyNjQuNjAuMC4w`;

  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly continueEmailButton: Locator;
  private readonly continuePasswordButton: Locator;

  constructor(page) {
    super(page);

    this.emailField = page.locator("input[id='username']");
    this.passwordField = page.locator("input[id='password']");
    this.continueEmailButton = page.locator("button._button-login-id");
    this.continuePasswordButton = page.locator("button._button-login-password");
  }

  public async openLoginURL(): Promise<void> {
    await super.openURL(LoginPage.URL);
  }

  public async isEmailInputDisplayed(): Promise<void> {
    await this.isDisplayed(this.emailField);
  }

  public async isPasswordInputDisplayed(): Promise<void> {
    await this.isDisplayed(this.passwordField);
  }

  public async isContinueEmailButtonDisplayed(): Promise<void> {
    await this.isDisplayed(this.continueEmailButton);
  }

  public async isContinuePasswordButtonDisplayed(): Promise<void> {
    await this.isDisplayed(this.continuePasswordButton);
  }

  public async fillEmailField(email: string): Promise<void> {
    await super.setValue(this.emailField, email);
  }

  public async fillPasswordField(password: string): Promise<void> {
    await super.setValue(this.passwordField, password);
  }

  public async clickContinueEmailButton(): Promise<void> {
    await super.click(this.continueEmailButton);
  }

  public async clickContinuePasswordButton(): Promise<void> {
    await super.click(this.continuePasswordButton);
  }
}

export default LoginPage;
