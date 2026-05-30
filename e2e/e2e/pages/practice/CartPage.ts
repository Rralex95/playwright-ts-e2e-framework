import { Page, Locator } from "@playwright/test"

export class CartPage {

    private readonly page: Page

    private readonly checkoutButton: Locator
    private readonly cartRows: Locator
    private readonly productName: Locator

    constructor(page: Page) {
        this.page = page

        this.checkoutButton = page.locator("button.btn-success")
        this.cartRows = page.locator("tr")
        this.productName = page.locator("h4.media-heading a")
    }

    async removeProduct(productName: string) {
        await this.cartRows
            .filter({ hasText: productName })
            .locator("button.btn-danger")
            .click()
    }

    async goToCheckout() {
        await this.checkoutButton.click()
    }

    async isProductInCart(productName: string): Promise<boolean> {
        return this.productName
            .filter({ hasText: productName })
            .isVisible()
    }

}