import { test, expect } from "@playwright/test"
import { LoginPage } from "../../../pages/practice/LoginPage"
import { ERROR_MESSAGES } from "../../../../../data/messages"
import { getLoginTestData } from "../../../../../data/testData"

test.describe("Data Driven Login", () => {

    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto()
    })

    for (const data of getLoginTestData()) {
        test(`should login with ${data.description}`, async ({ page }) => {
            if (data.shouldPass) {
                await loginPage.loginAsUser(data.username, data.password, data.role)

                await expect(page).toHaveURL(data.expectedURL)
            } else {
                await loginPage.userNameTextbox.fill(data.username)
                await loginPage.passwordTextbox.fill(data.password)
                await loginPage.loginButton.click()

                const error = await loginPage.getErrorMessage()
                expect(error).toContain(ERROR_MESSAGES.invalidCredentials)
            }
        })
    }

})