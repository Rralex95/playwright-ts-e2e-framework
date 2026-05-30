import { Page, Locator } from "@playwright/test"

export class CheckoutPage {

    private readonly page: Page

    private readonly countryInput: Locator
    private readonly countrySuggestions: Locator
    private readonly countrySuggestionsContainer: Locator
    private readonly termsLabel: Locator
    readonly termsCheckbox: Locator
    private readonly purchaseButton: Locator
    readonly successMessage: Locator

    constructor(page: Page) {
        this.page = page

        this.countryInput = page.locator("#country")
        this.countrySuggestions = page.locator(".suggestions ul li")
        this.countrySuggestionsContainer = page.locator(".suggestions ul")
        this.termsCheckbox = page.locator("#checkbox2")
        this.termsLabel = page.locator("label[for='checkbox2']")
        this.purchaseButton = page.locator("input.btn-success")
        this.successMessage = page.locator(".alert-success")
    }

    async selectCountry(country: string) {
        await this.countryInput.pressSequentially(country, { delay: 300 })
        await this.countrySuggestionsContainer.waitFor({ state: 'visible' })
        await this.countryInput.press('ArrowDown')
        await this.countrySuggestions.first().click({ force: true })
        await this.page.locator("body").click({ position: { x: 0, y: 0 } })
    }

    async acceptTerms() {
        await this.termsLabel.click({ force: true })
    }

    async purchase() {
        await this.purchaseButton.click()
    }

    async getSuccessMessage(): Promise<string> {
        await this.successMessage.waitFor({ state: "visible" })
        return this.successMessage.innerText()
    }

}