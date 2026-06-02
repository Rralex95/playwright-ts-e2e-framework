import { type Page } from "@playwright/test"
import { LoginPage } from "../pages/practice/LoginPage"
import { PRACTICE_USERS, ROLES } from "../../../data/users"

export async function loginAsAdmin(page: Page): Promise<void> {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginAsAdmin(
        PRACTICE_USERS.admin.username,
        PRACTICE_USERS.admin.password
    )
}

export async function loginAsUser(page: Page): Promise<void> {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginAsUser(
        PRACTICE_USERS.user.username,
        PRACTICE_USERS.user.password,
        ROLES[0]
    )
}