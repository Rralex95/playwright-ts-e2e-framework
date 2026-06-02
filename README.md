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
│   ├── env.ts                    # Environment variable loader
│   └── paths.ts                  # Framework path constants
├── data/
│   ├── checkoutData.ts           # Checkout test data
│   ├── messages.ts               # Error and success messages
│   ├── products.ts               # Product constants
│   ├── testData.ts               # Data-driven test datasets
│   └── users.ts                  # User credentials and roles
├── e2e/
│   └── e2e/
│       ├── fixtures/
│       │   └── index.ts                   # Playwright fixtures (Page Object injection)
│       ├── helpers/
│       │   └── auth.helper.ts             # Reusable login functions
│       ├── pages/
│       │   └── practice/
│       │       ├── LoginPage.ts           # Login Page Object
│       │       ├── ShopPage.ts            # Shop Page Object
│       │       ├── CartPage.ts            # Cart Page Object
│       │       └── CheckoutPage.ts        # Checkout Page Object
│       ├── setup/
│       │   └── auth.setup.ts             # Authentication setup (storageState)
│       └── tests/
│           └── practice/
│               ├── auth/
│               │   ├── login.happy.spec.ts        # Happy path tests
│               │   └── login.validation.spec.ts   # Validation tests
│               ├── ui/
│               │   ├── radio.modal.spec.ts        # Modal behavior tests
│               │   ├── dropdown.spec.ts           # Dropdown tests
│               │   └── ux.behavior.spec.ts        # UX behavior tests
│               ├── advanced/
│               │   └── data.driven.spec.ts        # Data-driven tests
│               └── shop/
│                   ├── shop.happy.spec.ts         # Shop happy path tests
│                   ├── shop.cart.spec.ts          # Cart tests
│                   └── shop.checkout.spec.ts      # Checkout tests
├── .env.example                  # Environment variable template
├── playwright.config.ts          # Playwright configuration
└── package.json
```

---

## Test Coverage

| File                       | Tests  | Description                              |
| -------------------------- | ------ | ---------------------------------------- |
| `login.happy.spec.ts`      | 3      | Admin and user login flows               |
| `login.validation.spec.ts` | 7      | Empty fields, invalid credentials, terms |
| `radio.modal.spec.ts`      | 3      | Modal display, cancel, and confirmation  |
| `dropdown.spec.ts`         | 3      | Role selection (parametrized)            |
| `ux.behavior.spec.ts`      | 2      | Password masking, dropdown options       |
| `data.driven.spec.ts`      | 4      | Login flows with multiple datasets       |
| `shop.happy.spec.ts`       | 2      | Add to cart and complete purchase        |
| `shop.cart.spec.ts`        | 2      | Cart display and product removal         |
| `shop.checkout.spec.ts`    | 2      | Purchase with and without terms          |
| **Total**                  | **28** | **85 across 3 browsers**                 |

---

## Browsers

Tests run across three browsers via Playwright projects:

- Chromium
- Firefox
- WebKit (Safari)

> **Note:** Firefox may show a slow teardown process when running against rahulshettyacademy.com due to third-party scripts (Google Tag Manager, Facebook Pixel). All tests pass correctly — this is a known behavior of the test site, not the framework.

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
CLIENT_EMAIL=your_email
CLIENT_PASSWORD=your_password
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
