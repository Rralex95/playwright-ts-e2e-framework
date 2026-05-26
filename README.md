# playwright-ts-e2e-framework

End-to-end test automation framework built with Playwright and TypeScript, following the Page Object Model pattern and best practices for scalable, maintainable test suites.

---

## Tech Stack

- [Playwright](https://playwright.dev/) — cross-browser E2E testing
- [TypeScript](https://www.typescriptlang.org/) — type-safe test code
- [dotenv](https://github.com/motdotla/dotenv) — environment variable management
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline

---

## Project Structure

```
playwright-ts-e2e-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD pipeline
├── config/
│   └── env.ts                    # Environment variable loader
├── data/
│   ├── messages.ts               # Error and validation messages
│   ├── testData.ts               # Data-driven test datasets
│   └── users.ts                  # User credentials and roles
├── e2e/
│   └── e2e/
│       ├── pages/
│       │   └── practice/
│       │       └── LoginPage.ts           # Page Object Model
│       └── tests/
│           └── practice/
│               ├── auth/
│               │   ├── login.happy.spec.ts        # Happy path tests
│               │   └── login.validation.spec.ts   # Validation tests
│               ├── ui/
│               │   ├── radio.modal.spec.ts        # Modal behavior tests
│               │   ├── dropdown.spec.ts           # Dropdown tests
│               │   └── ux.behavior.spec.ts        # UX behavior tests
│               └── advanced/
│                   └── data.driven.spec.ts        # Data-driven tests
├── .env.example                  # Environment variable template
├── playwright.config.ts          # Playwright configuration
└── package.json
```

---

## Test Coverage

| File | Tests | Description |
|---|---|---|
| `login.happy.spec.ts` | 3 | Admin and user login flows |
| `login.validation.spec.ts` | 7 | Empty fields, invalid credentials, terms |
| `radio.modal.spec.ts` | 3 | Modal display, cancel, and confirmation |
| `dropdown.spec.ts` | 3 | Role selection (parametrized) |
| `ux.behavior.spec.ts` | 2 | Password masking, dropdown options |
| `data.driven.spec.ts` | 4 | Login flows with multiple datasets |
| **Total** | **22** | **66 across 3 browsers** |

---

## Browsers

Tests run across three browsers via Playwright projects:

- Chromium
- Firefox
- WebKit (Safari)

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Rralex95/playwright-ts-e2e-framework.git
cd playwright-ts-e2e-framework
npm install
npx playwright install
```

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

```env
BASE_URL=https://rahulshettyacademy.com
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

---

## Running Tests

```bash
# Run all tests
npm run test

# Run with browser visible
npm run test:fast

# Run specific spec
npm run test -- e2e/tests/practice/auth/login.happy.spec.ts

# Open Playwright UI mode
npm run test:ui

# View last HTML report
npm run report
```

---

## CI/CD

Tests run automatically on every push to `main` and `feature/**` branches via GitHub Actions. The full test report is uploaded as an artifact after each run.

---

## Author

**Misael Alexander Rincon Rodriguez**
[LinkedIn](https://www.linkedin.com/in/misaelrincon95/)
