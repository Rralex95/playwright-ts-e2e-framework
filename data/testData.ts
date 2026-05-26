import { PRACTICE_USERS, ROLES, INVALID_USER } from "./users"

export const getLoginTestData = () => [
    {
        description: "Student role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[0],
        expectedURL: "/angularpractice/shop",
        shouldPass: true
    },
    {
        description: "Teacher role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[1],
        expectedURL: "/angularpractice/shop",
        shouldPass: true
    },
    {
        description: "Consultant role",
        username: PRACTICE_USERS.user.username,
        password: PRACTICE_USERS.user.password,
        role: ROLES[2],
        expectedURL: "/angularpractice/shop",
        shouldPass: true
    },
    {
        description: "invalid credentials",
        username: INVALID_USER.username,
        password: INVALID_USER.password,
        role: ROLES[0],
        expectedURL: "/loginpagePractise/",
        shouldPass: false
    }
]