# 🚀 Apply Digital - LATAM QA Interview Test

[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-latest-blue)](https://www.npmjs.com/)
[![Cypress](https://img.shields.io/badge/Cypress-13.17.0-brightgreen)](https://www.cypress.io/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-CLI-yellow)](https://developers.google.com/web/tools/lighthouse/)
[![Mochawesome](https://img.shields.io/badge/Mochawesome-7.1.3-orange)](https://www.npmjs.com/package/mochawesome)

---

## 🌟 Project Overview
This project automates a critical user flow for the [Automation Exercise](https://automationexercise.com/) website using Cypress. The automation script covers a specific user journey for a clothing store, adaptable to both Desktop and Mobile viewports. It demonstrates:

- 🧩 Modularity
- 🔄 Reusability
- ✨ Clarity

Optionally, the project incorporates **Accessibility** and **Performance** testing.

---

## 📋 Requirements
- 🛠️ **Node.js** (v14 or later)
- 📦 **npm** (Node Package Manager)
- ✅ **Cypress** (installed via npm)
 
Optional tools:
- 🌐 **Lighthouse CLI** (for accessibility and performance testing)

---

## 🔧 Installation
1. **Clone the repository:**
   ```bash
   git clone git@github.com:Hilas/applydigitial.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd applydigital
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 🧪 Running the Tests

### 🚀 Full Test Execution
Run the entire testing process, including generating Lighthouse reports and executing Cypress tests, using:
```bash
npm run full:test
```
This script performs:
1. ✅ Executes Lighthouse for **accessibility** (`./accessibility-report.html`).
2. ✅ Executes Lighthouse for **performance** (`./performance-report.html`).
3. ✅ Runs Cypress tests in headless mode.
4. ✅ Prints links to the generated reports in the console.

### 🎯 Individual Test Commands
- **Open Cypress Test Runner:**
   ```bash
   npm run cypress:open
   ```
- **Run Cypress tests in headless mode:**
   ```bash
   npm run cypress:run
   ```
- **Generate Lighthouse Accessibility Report:**
   ```bash
   npm run lighthouse:accessibility
   ```
- **Generate Lighthouse Performance Report:**
   ```bash
   npm run lighthouse:performance
   ```

---

## 🔍 User Flow

### Preconditions
- The website is accessible.
- Required dependencies are installed.

### Test Steps (*Add item to checkout without registered user*):
1. Navigate to the website.
2. Go to the **Products** section.
3. Choose the third product from the list.
4. Enter a random quantity (1-20).
5. Add the product to the cart.
6. Proceed to checkout.

### Optional Steps (*Add item to checkout with new user*):
7. Register a new user using Faker-generated data.
8. Confirm the order.
9. Log out.

### Expected Results
- Product is added to the cart with the correct quantity.
- Validates the total price in the cart.
- Checkout completes successfully.
- Optional steps execute as expected.

---

## 📂 Project Structure

| Folder/File                     | Description                                    |
|--------------------------------|------------------------------------------------|
| `cypress/`                     | Contains test files, fixtures, and utilities. |
| `cypress/e2e/`                 | Holds the main test scripts.                  |
| `cypress/support/features`     | Gherkin feature files describing scenarios.   |
| `cypress/support/pages`        | Implements the Page Object Model (POM).       |
| `cypress/support/step_definitions` | Maps Gherkin steps to Cypress commands.   |
| `package.json`                 | Manages project dependencies and scripts.     |

---

## 🛠️ Tools and Libraries
- **Cypress**: 🧪 Framework for end-to-end testing.
- **Faker.js**: 🎲 Generates random data for test inputs.
- **Lighthouse**: 🌐 Measures accessibility and performance.
- **Mochawesome**: 📊 Generates detailed test reports.

---

## 📊 Reporting

### 🧾 Full Test Summary
After running `npm run full:test`, the console will display links to the generated reports:

- 📊 **Accessibility Report:** `./accessibility-report.html`
- 📈 **Performance Report:** `./performance-report.html`
- 🧪 **Mochawesome Report:** `./cypress/reports/index.html`

### 📋 Mochawesome Report
Test results are available in the `mochawesome-report` folder:
```bash
open mochawesome-report/index.html
```
In Windows:
```bash
start mochawesome-report/index.html
```

### 🌐 Lighthouse Reports

#### Accessibility Report
1. Run:
   ```bash
   npm run lighthouse:accessibility
   ```
2. Open:
   ```bash
   open ./accessibility-report.html
   ```
   On Windows:
   ```bash
   start ./accessibility-report.html
   ```

#### Performance Report
1. Run:
   ```bash
   npm run lighthouse:performance
   ```
2. Open:
   ```bash
   open ./performance-report.html
   ```
   On Windows:
   ```bash
   start ./performance-report.html
   ```

---
# Thank you for the opportunity. I hope you like it.
