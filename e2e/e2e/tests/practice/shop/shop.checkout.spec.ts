import { test, expect } from "@playwright/test"
import { ShopPage } from "../../../pages/practice/ShopPage"
import { CartPage } from "../../../pages/practice/CartPage"
import { CheckoutPage } from "../../../pages/practice/CheckoutPage"
import { PRODUCTS } from "../../../../../data/products"
import { CHECKOUT_DATA } from "../../../../../data/checkoutData"
import { SUCCESS_MESSAGES } from "../../../../../data/messages"

test.describe("Shop Checkout", () => {

    let shopPage: ShopPage
    let cartPage: CartPage
    let checkoutPage: CheckoutPage

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
        await page.goto("/angularpractice/shop")
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.goToCheckout()
    })

    test("should complete purchase without accepting terms", async () => {
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

    test("should complete purchase with valid country and terms accepted", async () => {
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.acceptTerms()

        await expect(checkoutPage.termsCheckbox).toBeChecked()

        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

})