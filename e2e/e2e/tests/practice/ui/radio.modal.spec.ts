import { expect } from "@playwright/test"
import { test } from "../../../fixtures"

test.describe("Radio Button Modal", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto()
    })

    test("should display modal when selecting user role", async ({ loginPage }) => {
        await loginPage.selectUserRole()

        await expect(loginPage.btnOkay).toBeVisible()
    })

    test("should cancel user role selection", async ({ loginPage }) => {
        await loginPage.selectUserRole()
        await loginPage.cancelModal()

        await expect(loginPage.typeUser.first()).toBeChecked()
    })

    test("should keep user role selected after confirmation", async ({ loginPage }) => {
        await loginPage.selectUserRole()
        await loginPage.confirmModal()

        await expect(loginPage.typeUser.last()).toBeChecked()
    })

})