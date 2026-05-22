import { test, expect } from "@playwright/test"
import { PracticeLoginPage } from "../../pages/practice/PracticeLoginPage"
import { PRACTICE_USERS } from "../../data/users"
import { ERROR_MESSAGES } from "../../data/messages"

test.describe.only("Login Validations", () => {

    let loginPage: PracticeLoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new PracticeLoginPage(page)
        await loginPage.goto()
    })

    test("should show error when username is empty", async () => {
        await loginPage.passwordTextbox.fill(PRACTICE_USERS.admin.password)
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should show error when password is empty", async () => {
        await loginPage.userNameTextbox.fill(PRACTICE_USERS.admin.username)
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should not login with empty fields", async () => {
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should show invalid credentials message", async () => {
        await loginPage.userNameTextbox.fill("wronguser")
        await loginPage.passwordTextbox.fill("wrongpassword")
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.invalidCredentials)
    })

})