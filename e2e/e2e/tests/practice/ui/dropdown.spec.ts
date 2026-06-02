import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { ROLES } from "../../../../../data/users"

test.describe("Dropdown", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto()
    })

    for (const role of ROLES) {
        test(`should select ${role} from dropdown`, async ({ loginPage }) => {
            await loginPage.dropDown.selectOption(role)

            await expect(loginPage.dropDown.locator("option:checked")).toHaveText(role)
        })
    }

})