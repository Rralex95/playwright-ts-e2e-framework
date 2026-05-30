import { test, expect } from "@playwright/test"
import { ShopPage } from "../../../pages/practice/ShopPage"
import { CartPage } from "../../../pages/practice/CartPage"
import { PRODUCTS } from "../../../../../data/products"

test.describe("Shop Cart", () => {

    let shopPage: ShopPage
    let cartPage: CartPage

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page)
        cartPage = new CartPage(page)
        await page.goto("/angularpractice/shop")
    })

    test("should display product in cart after adding", async () => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()

        const isInCart = await cartPage.isProductInCart(PRODUCTS.iphoneX)
        expect(isInCart).toBeTruthy()
    })

    test("should remove product from cart", async () => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.removeProduct(PRODUCTS.iphoneX)

        const isInCart = await cartPage.isProductInCart(PRODUCTS.iphoneX)
        expect(isInCart).toBeFalsy()
    })

})