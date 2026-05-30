import { test as setup, expect } from "@playwright/test"
import { LoginPage } from "../pages/practice/LoginPage"
import { PRACTICE_USERS, ROLES } from "../../../data/users"
import { PATHS } from "../../../config/paths"

setup("authenticate as user", async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.loginAsUser(
        PRACTICE_USERS.user.username,
        PRACTICE_USERS.user.password,
        ROLES[0]
    )

    await expect(page).toHaveURL("/angularpractice/shop")

    await page.context().storageState({ path: PATHS.authFile })
})