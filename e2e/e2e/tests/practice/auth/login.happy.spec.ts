import { test, expect } from "@playwright/test"
import { PracticeLoginPage } from "../../../pages/practice/PracticeLoginPage"
import { PRACTICE_USERS, ROLES } from "../../../data/users"
import { URLS } from "../../../data/urls"

test.describe("Login Happy Paths", () => {

    let loginPage: PracticeLoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new PracticeLoginPage(page)

        await loginPage.goto()
    })

    test("admin can login successfully", async ({ page }) => {
        const { username, password } = PRACTICE_USERS.admin

        await loginPage.loginAsAdmin(username, password)

        await expect(page).toHaveURL(URLS.shopPage)
    })

    test("user can login successfully", async ({ page }) => {
        const { username, password } = PRACTICE_USERS.user

        await loginPage.loginAsUser(username, password, ROLES[0])

        await expect(page).toHaveURL(URLS.shopPage)
    })

    test("user can accept modal confirmation", async ({ page }) => {
        const { username, password } = PRACTICE_USERS.user

        await loginPage.userNameTextbox.fill(username)
        await loginPage.passwordTextbox.fill(password)
        await loginPage.selectUserRole()
        await loginPage.confirmModal()
        await loginPage.fillUserDetails(ROLES[0])
        await loginPage.loginButton.click()

        await expect(page).toHaveURL(URLS.shopPage)
    })

})