import { test, expect } from "@playwright/test"
import { ShopPage } from "../../../pages/practice/ShopPage"
import { CartPage } from "../../../pages/practice/CartPage"
import { CheckoutPage } from "../../../pages/practice/CheckoutPage"
import { PRODUCTS } from "../../../../../data/products"
import { CHECKOUT_DATA } from "../../../../../data/checkoutData"
import { SUCCESS_MESSAGES } from "../../../../../data/messages"

test.describe("Shop Happy Paths", () => {

    let shopPage: ShopPage
    let cartPage: CartPage
    let checkoutPage: CheckoutPage

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
        await page.goto("/angularpractice/shop")
    })

    test("should add product to cart and complete purchase", async ({ page }) => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.goToCheckout()
        await checkoutPage.selectCountry(CHECKOUT_DATA.validCountry)
        await checkoutPage.acceptTerms()
        await checkoutPage.purchase()

        const message = await checkoutPage.getSuccessMessage()
        expect(message).toContain(SUCCESS_MESSAGES.orderPlaced)
    })

    test("should update checkout counter when product is added", async () => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)

        const count = await shopPage.getCheckoutCount()
        expect(count).toContain("1")
    })

})