import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/practice/LoginPage"
import { ShopPage } from "../pages/practice/ShopPage"
import { CartPage } from "../pages/practice/CartPage"
import { CheckoutPage } from "../pages/practice/CheckoutPage"

type PracticeFixtures = {
    loginPage: LoginPage
    shopPage: ShopPage
    cartPage: CartPage
    checkoutPage: CheckoutPage
}

export const test = base.extend<PracticeFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    shopPage: async ({ page }, use) => {
        await use(new ShopPage(page))
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    }
})

export { expect } from "@playwright/test"