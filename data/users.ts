import { ENV } from "../config/env"

export const PRACTICE_USERS = {
    admin: {
        username: ENV.adminUsername,
        password: ENV.adminPassword,
        type: "Admin"
    },
    user: {
        username: ENV.adminUsername,
        password: ENV.adminPassword,
        type: "User"
    }
}

export const CLIENT_USERS = {
    validUser: {
        email: ENV.clientEmail,
        password: ENV.clientPassword
    }
}

export const INVALID_USER = {
    username: "wronguser",
    password: "wrongpassword"
}

export const ROLES = [
    "Student",
    "Teacher",
    "Consultant"
]