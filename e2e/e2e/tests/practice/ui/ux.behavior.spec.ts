import { test, expect } from "@playwright/test"
import { PracticeLoginPage } from "../../../pages/practice/PracticeLoginPage"
import { ROLES } from "../../../data/users"

test.describe("UX Behavior", () => {

    let loginPage: PracticeLoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new PracticeLoginPage(page)
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