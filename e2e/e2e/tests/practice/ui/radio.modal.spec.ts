import { test, expect } from "@playwright/test"
import { LoginPage } from "../../../pages/practice/LoginPage"

test.describe("Radio Button Modal", () => {

    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto()
    })

    test("should display modal when selecting user role", async () => {
        await loginPage.selectUserRole()

        await expect(loginPage.btnOkay).toBeVisible()
    })

    test("should cancel user role selection", async () => {
        await loginPage.selectUserRole()
        await loginPage.cancelModal()

        await expect(loginPage.typeUser.first()).toBeChecked()
    })

    test("should keep user role selected after confirmation", async () => {
        await loginPage.selectUserRole()
        await loginPage.confirmModal()

        await expect(loginPage.typeUser.last()).toBeChecked()
    })

})