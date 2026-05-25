import { PRACTICE_USERS, ROLES, INVALID_USER } from "./users"
import { URLS } from "./urls"

export const getLoginTestData = () => [
    {
        description: "Student role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[0],
        expectedURL: URLS.shopPage,
        shouldPass: true
    },
    {
        description: "Teacher role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[1],
        expectedURL: URLS.shopPage,
        shouldPass: true
    },
    {
        description: "Consultant role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[2],
        expectedURL: URLS.shopPage,
        shouldPass: true
    },
    {
        description: "invalid credentials",
        username: INVALID_USER.username,
        password: INVALID_USER.password,
        role: ROLES[0],
        expectedURL: URLS.loginPage,
        shouldPass: false
    }
]