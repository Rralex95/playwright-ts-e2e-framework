import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { PRACTICE_USERS, INVALID_USER } from "../../../../../data/users"
import { ERROR_MESSAGES } from "../../../../../data/messages"

test.describe("Login Validations", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto()
    })

    test("should show error when username is empty", async ({ loginPage }) => {
        await loginPage.passwordTextbox.fill(PRACTICE_USERS.admin.password)
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should show error when password is empty", async ({ loginPage }) => {
        await loginPage.userNameTextbox.fill(PRACTICE_USERS.admin.username)
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should show invalid credentials message", async ({ loginPage }) => {
        await loginPage.userNameTextbox.fill(INVALID_USER.username)
        await loginPage.passwordTextbox.fill(INVALID_USER.password)
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.invalidCredentials)
    })

    test("should not login with empty fields", async ({ loginPage }) => {
        await loginPage.loginButton.click()

        const error = await loginPage.getErrorMessage()
        expect(error).toContain(ERROR_MESSAGES.emptyFields)
    })

    test("should allow checking terms and conditions", async ({ loginPage }) => {
        await loginPage.termsCheckbox.check()

        await expect(loginPage.termsCheckbox).toBeChecked()
    })

    test("should allow unchecking terms and conditions", async ({ loginPage }) => {
        await loginPage.termsCheckbox.check()
        await loginPage.termsCheckbox.uncheck()

        await expect(loginPage.termsCheckbox).not.toBeChecked()
    })

    test("should prevent login without accepting terms", async ({ page, loginPage }) => {
        await loginPage.userNameTextbox.fill(PRACTICE_USERS.admin.username)
        await loginPage.passwordTextbox.fill(PRACTICE_USERS.admin.password)
        await loginPage.termsCheckbox.uncheck()
        await loginPage.loginButton.click()

        await expect(loginPage.termsCheckbox).not.toBeChecked()
        await expect(page).toHaveURL("/loginpagePractise/")
    })

})