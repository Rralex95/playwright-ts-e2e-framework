import { test, expect } from "@playwright/test"
import { LoginPage } from "../../../pages/practice/LoginPage"
import { ROLES } from "../../../../../data/users"

test.describe("UX Behavior", () => {

    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto()
    })

    test("password field should mask input", async () => {
        await expect(loginPage.passwordTextbox).toHaveAttribute("type", "password")
    })

    test("dropdown should contain expected roles", async () => {
        const options = await loginPage.dropDown.locator("option").allTextContents()

        expect(options).toEqual(expect.arrayContaining(ROLES))
    })

})