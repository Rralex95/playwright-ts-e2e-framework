import { expect } from "@playwright/test"
import { test } from "../../../fixtures"
import { PRODUCTS } from "../../../../../data/products"

test.describe("Shop Cart", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/angularpractice/shop")
    })

    test("should display product in cart after adding", async ({ shopPage, cartPage }) => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()

        const isInCart = await cartPage.isProductInCart(PRODUCTS.iphoneX)
        expect(isInCart).toBeTruthy()
    })

    test("should remove product from cart", async ({ shopPage, cartPage }) => {
        await shopPage.addProductToCart(PRODUCTS.iphoneX)
        await shopPage.goToCheckout()
        await cartPage.removeProduct(PRODUCTS.iphoneX)

        const isInCart = await cartPage.isProductInCart(PRODUCTS.iphoneX)
        expect(isInCart).toBeFalsy()
    })

})