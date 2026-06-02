import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { loginAsAdmin, loginAsUser } from "../../../helpers/auth.helper"
import { PRACTICE_USERS, ROLES } from "../../../../../data/users"

test.describe("Login Happy Paths", () => {

    test("admin can login successfully", async ({ page }) => {
        await loginAsAdmin(page)

        await expect(page).toHaveURL("/angularpractice/shop")
    })

    test("user can login successfully", async ({ page }) => {
        await loginAsUser(page)

        await expect(page).toHaveURL("/angularpractice/shop")
    })

    test("user can accept modal confirmation", async ({ page, loginPage }) => {
        const { username, password } = PRACTICE_USERS.user

        await loginPage.goto()
        await loginPage.userNameTextbox.fill(username)
        await loginPage.passwordTextbox.fill(password)
        await loginPage.selectUserRole()
        await loginPage.confirmModal()

        await expect(loginPage.typeUser.last()).toBeChecked()

        await loginPage.fillUserDetails(ROLES[0])
        await loginPage.loginButton.click()

        await expect(page).toHaveURL("/angularpractice/shop")
    })

})