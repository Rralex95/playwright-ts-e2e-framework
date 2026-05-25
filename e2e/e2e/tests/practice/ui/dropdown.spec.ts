import { test, expect } from "@playwright/test"
import { PracticeLoginPage } from "../../../pages/practice/PracticeLoginPage"
import { ROLES } from "../../../../../data/users"

test.describe("Dropdown", () => {

    let loginPage: PracticeLoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new PracticeLoginPage(page)
        await loginPage.goto()
    })
    for (const role of ROLES) {
        test(`should select ${role} from dropdown`, async () => {
            await loginPage.dropDown.selectOption(role)

            await expect(loginPage.dropDown.locator("option:checked")).toHaveText(role)
        })
    }

})