import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { ROLES } from "../../../../../data/users"

test.describe("UX Behavior", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto()
    })

    test("password field should mask input", async ({ loginPage }) => {
        await expect(loginPage.passwordTextbox).toHaveAttribute("type", "password")
    })

    test("dropdown should contain expected roles", async ({ loginPage }) => {
        const options = await loginPage.dropDown.locator("option").allTextContents()

        expect(options).toEqual(expect.arrayContaining(ROLES))
    })

})