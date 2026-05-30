import { Page, Locator } from "@playwright/test"

export class ShopPage {

    private readonly page: Page

    private readonly checkoutButton: Locator
    private readonly productCards: Locator

    constructor(page: Page) {
        this.page = page

        this.checkoutButton = page.locator("a.btn-primary")
        this.productCards = page.locator(".card.h-100")
    }

    async addProductToCart(productName: string) {
        await this.productCards
            .filter({ hasText: productName })
            .locator("button.btn-info")
            .click()
    }

    async goToCheckout() {
        await this.checkoutButton.click()
    }

    async getCheckoutCount(): Promise<string> {
        return this.checkoutButton.innerText()
    }

}