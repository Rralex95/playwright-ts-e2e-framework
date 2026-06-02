import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { PRODUCTS } from "../../../../../data/products"
import { CHECKOUT_DATA } from "../../../../../data/checkoutData"
import { SUCCESS_MESSAGES } from "../../../../../data/messages"

test.describe("Shop Happy Paths", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/angularpractice/shop")
    })

    test("should add product to cart and complete purchase", async ({ shopPage, cartPage, checkoutPage }) => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.goToCheckout()
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.acceptTerms()
        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

    test("should update checkout counter when product is added", async ({ shopPage }) => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)

        const count = await shopPage.getCheckoutCount()
        expect(count).toContain("1")
    })

})