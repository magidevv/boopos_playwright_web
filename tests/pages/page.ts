import { Page as PlaywrightPage } from 'playwright';

class Page {
  private page: PlaywrightPage;

  /**
   * @param {PlaywrightPage} page
   */
  constructor(page: PlaywrightPage) {
    this.page = page;
  }

  async openUrl(url?: string) {
    await this.page.goto(url === undefined ? "/" : url);
    await this.page.waitForLoadState("load");
  }

  async getElement(element: string) {
    return await this.page.locator(element);
  }

  async clickElement(element: string) {
    await (await this.getElement(element)).click();
  }

  async fillElement(element: string, data: string) {
    await (await this.getElement(element)).fill(data);
  }
}

export { Page };