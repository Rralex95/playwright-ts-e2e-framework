import * as dotenv from "dotenv"
dotenv.config()

export const ENV = {
    baseUrl: process.env.BASE_URL ?? "",
    adminUsername: process.env.ADMIN_USERNAME ?? "",
    adminPassword: process.env.ADMIN_PASSWORD ?? "",
}