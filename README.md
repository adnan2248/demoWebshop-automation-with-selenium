# demoWebshop-automation-with-selenium
# 🛒 Demo Web Shop Automation Testing with Selenium

A UI test automation project built using **JavaScript, Selenium WebDriver, and Node.js** to automate key e-commerce workflows on the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/).

The project focuses on validating user registration, login, product selection, cart operations, checkout, and order confirmation through browser automation.

## 📌 Project Overview

This project demonstrates practical Software Quality Assurance (SQA) skills by automating real-world e-commerce user journeys. It uses a page-based structure to organize page interactions and test workflows, making the code easier to maintain and extend.

### ✨ Key Features

- **User Registration** — Automates the registration form and submission.
- **User Login** — Automates login using user credentials.
- **Product Navigation** — Navigates through product categories and product pages.
- **Product Sorting** — Interacts with the product sorting dropdown.
- **Add to Cart** — Adds selected products to the shopping cart.
- **Checkout Automation** — Automates checkout form interactions and progression through checkout steps.
- **Order Confirmation** — Automates the final order confirmation action.
- **Reusable Page Methods** — Organizes browser interactions into reusable methods.
- **Shared WebDriver** — Supports using a single browser session across page objects.
- **End-to-End Workflow** — Connects multiple e-commerce actions into a complete shopping journey.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Test automation programming |
| Node.js | JavaScript runtime |
| Selenium WebDriver | Browser automation |
| Chrome | Browser under test |
| Git & GitHub | Version control and project hosting |

## 📂 Project Structure

```text
automation-with-selenium/
│
├── pages/
│   ├── addToCartPage.js
│   ├── base.js
│   ├── checkoutPage.js
│   ├── loginpage.js
│   └── signuppage.js
│
├── tests/
│   ├── addToCartTest.js
│   ├── checkoutTest.js
│   ├── logintest.js
│   └── signuptest.js
│
├── package.json
├── package-lock.json
└── README.md
```

### 📄 Page Classes (`pages/`)

- **`base.js`** — Contains shared browser functionality and reusable methods.
- **`addToCartPage.js`** — Handles product navigation, sorting, adding products to the cart, and related cart interactions.
- **`checkoutPage.js`** — Handles checkout-page interactions and checkout workflow steps.
- **`loginpage.js`** — Contains locators and methods for user login.
- **`signuppage.js`** — Contains locators and methods for user registration.

### 🧪 Test Scripts (`tests/`)

- **`addToCartTest.js`** — Executes the add-to-cart automation workflow.
- **`checkoutTest.js`** — Executes the checkout automation workflow.
- **`logintest.js`** — Runs the login test.
- **`signuptest.js`** — Runs the user registration test. 

Each test script uses the relevant page methods to automate interactions with the Demo Web Shop application.
## ⚙️ Prerequisites

Before running the automation, install:

- [Node.js](https://nodejs.org/)
- [Google Chrome](https://www.google.com/chrome/)
- [Git](https://git-scm.com/)

You should have a basic understanding of JavaScript, asynchronous functions, and Selenium WebDriver.

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/adnan2248/demoWebshop-automation-with-selenium.git
```

### 2. Navigate to the project directory

```bash
cd demoWebshop-automation-with-selenium
```

### 3. Install dependencies

```bash
npm install
```

If Selenium WebDriver is not already listed in your dependencies, install it with:

```bash
npm install selenium-webdriver
```

### 4. Configure test data

Review the test files and update the registration or login credentials as needed. Use test-only credentials and avoid committing real passwords or other sensitive information.

## ▶️ Running the Tests

Run the test files individually from the project root:

**Registration test**

```bash
node tests/signuptest.js
```

**Add-to-cart and checkout workflow**

```bash
node tests/addToCartTest.js
```

Chrome will open and execute the steps defined in the selected test file. Ensure the browser and test environment are ready before running the scripts.

## 🧪 Test Scenarios

| Test Scenario | Expected Result |
|---|---|
| User registration | Registration form is submitted successfully with valid data |
| User login | User can log in with valid credentials |
| Product category navigation | The selected category or product page opens |
| Product sorting | Products are sorted according to the selected option |
| Add product to cart | The selected product is added to the cart |
| Checkout navigation | The checkout process begins |
| Checkout form completion | Required checkout information is entered |
| Order confirmation | The final confirmation action is performed and the site displays the appropriate result |

*The expected results describe the intended validations. Confirm actual outcomes through test assertions and execution results.*

## 🏗️ Project Design

The project uses a page-based organization to separate browser interactions from test workflows.

- **Base Page:** Provides shared browser functionality, such as opening a URL.
- **Page Classes:** Keep related page locators and interaction methods together.
- **Test Scripts:** Call page methods in sequence to execute user journeys.

This approach encourages code reuse, reduces duplication, and makes it easier to maintain the automation as the application changes.

## 🎯 Learning Objectives

This project provides hands-on practice with:

- Selenium WebDriver and browser control
- JavaScript `async`/`await`
- Locating elements using IDs, CSS selectors, and XPath
- Dropdowns, buttons, links, checkboxes, and form inputs
- Page-based test automation design
- Reusing a WebDriver instance across page objects
- Debugging element visibility, stale-element, and timeout errors
- Automating end-to-end e-commerce workflows
- Git and GitHub project management

## 🔮 Future Improvements

Potential enhancements include:

- Adding explicit waits and more reliable element interactions
- Adding assertions to verify each critical step
- Implementing a dedicated test runner and structured test suites
- Generating automated test reports
- Moving test data into configuration or environment files
- Adding negative testing and validation scenarios
- Integrating the tests into a CI/CD pipeline with GitHub Actions

## ⚠️ Disclaimer

This project is intended for learning and demonstration purposes. It uses a public demo e-commerce website and is not intended for testing unauthorized systems or processing real customer orders.

## 👨‍💻 Author

**Adnan Hossain**

CSE Student| AIUB | Aspiring QA Engineer

Interested in Software Quality Assurance, Web UI Automation, JavaScript, Selenium WebDriver, and API Testing.

- GitHub: [@adnan2248](https://github.com/adnan2248)
- Project Repository: [Demo Web Shop Automation with Selenium](https://github.com/adnan2248/demoWebshop-automation-with-selenium)

---

⭐ If you find this project useful, feel free to explore the repository and follow my learning journey in software testing and automation.