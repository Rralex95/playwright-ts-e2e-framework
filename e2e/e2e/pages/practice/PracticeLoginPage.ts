import { Page, Locator, expect } from "@playwright/test"
import { URLS } from "../../data/urls"

export class PracticeLoginPage {

    private readonly page: Page

    readonly userNameTextbox: Locator
    readonly passwordTextbox: Locator
    readonly loginButton: Locator
    private readonly typeUser: Locator
    private readonly btnOkay: Locator
    readonly dropDown: Locator
    readonly termsCheckbox: Locator
    private readonly documentLink: Locator
    private readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page

        this.userNameTextbox = page.locator("#username")
        this.passwordTextbox = page.locator("#password")
        this.loginButton = page.locator("#signInBtn")
        this.typeUser = page.locator(".radiotextsty")
        this.btnOkay = page.locator("#okayBtn")
        this.dropDown = page.locator("select.form-control")
        this.termsCheckbox = page.locator('input[type="checkbox"]')
        this.documentLink = page.locator('a[href*="documents-request"]')
        this.errorMessage = page.locator(".alert-danger")
    }

    async goto() {
        await this.page.goto(URLS.loginPage)
    }

    async loginAsAdmin(user: string, password: string) {
        await this.userNameTextbox.fill(user)
        await this.passwordTextbox.fill(password)
        await this.loginButton.click()
        await this.page.waitForURL(URLS.shopPage)
    }

    async loginAsUser(user: string, password: string, role: string) {
        await this.userNameTextbox.fill(user)
        await this.passwordTextbox.fill(password)
        await this.selectUserRole()
        await this.confirmModal()
        await this.fillUserDetails(role)
        await this.loginButton.click()
        await this.page.waitForURL(URLS.shopPage)
    }

    async selectUserRole() {
        await this.typeUser.last().click()
    }

    async confirmModal() {
        await this.btnOkay.waitFor({ state: 'visible' })
        await this.btnOkay.click()
        await this.btnOkay.waitFor({ state: 'hidden' })
        await expect(this.typeUser.last()).toBeChecked()
    }

    async fillUserDetails(role: string) {
        await this.dropDown.selectOption(role)
        await this.termsCheckbox.check()
    }

    async getErrorMessage() {
        await this.errorMessage.waitFor({ state: 'visible' })
        return this.errorMessage.innerText()
    }

}
