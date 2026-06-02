import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { PRODUCTS } from "../../../../../data/products"
import { CHECKOUT_DATA } from "../../../../../data/checkoutData"
import { SUCCESS_MESSAGES } from "../../../../../data/messages"

test.describe("Shop Checkout", () => {

    test.beforeEach(async ({ page, shopPage, cartPage }) => {
        await page.goto("/angularpractice/shop")
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.goToCheckout()
    })

    test("should complete purchase without accepting terms", async ({ checkoutPage }) => {
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

    test("should complete purchase with valid country and terms accepted", async ({ checkoutPage }) => {
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.acceptTerms()

        await expect(checkoutPage.termsCheckbox).toBeChecked()

        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

})