# Apply Digital - LATAM QA Interview Test

## Project Overview
This project automates a critical user flow for the [Automation Exercise](https://automationexercise.com/) website using Cypress. The automation script covers a specific user journey for a clothing store, adaptable to both Desktop and Mobile viewports. It demonstrates core QA practices, including modularity, reusability, and clarity, and optionally incorporates accessibility and performance testing.

## Requirements
- Node.js (v14 or later)
- npm (Node Package Manager)
- Cypress (installed via npm)

Optional tools:
- Lighthouse CLI (for accessibility and performance testing)

## Installation
1. Clone this repository:
   ```bash
   git clone git@github.com:Hilas/applydigitial.git
   ```
2. Navigate to the project directory:
   ```bash
   cd applydigital
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Tests
1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
   Select the desired test file and execute it.

2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```

3. To execute optional Lighthouse tests (if configured):
   ```bash
   lighthouse https://automationexercise.com/ --output json --output html
   ```

## User Flow
### Preconditions
- The website is accessible.
- The required dependencies are installed.

### Test Steps ( *scenario: Add item to checkout without registered user in <resolution>*)
1. Navigate to the website.
2. Go to the **Products** section.
3. Choose the third product from the product list.
4. Enter a random quantity between 1 and 20.
5. Add the product to the cart.
6. Proceed to checkout.

#### Optional steps (*Add item to checkout with new user register <resolution>*)
- Register a new user using Faker-generated data.
- Confirm the order.
- Log out.

### Expected Results
- The product is successfully added to the cart with the correct quantity.
- The checkout process completes without errors.
- Optional steps execute as expected.

## Project Structure
- `cypress/`: Contains test files, fixtures, and support utilities.
- `cypress/e2e/`: Holds the main test scripts.
- `cypress/support/features`: Contains Gherkin feature files describing the test scenarios.
- `cypress/support/pages`: Implements the Page Object Model (POM) design pattern, encapsulating page-specific interactions and elements.
- `cypress/support/step_definitions`: Maps Gherkin steps to Cypress commands, enabling behavior-driven testing (BDD).
- `package.json`: Manages project dependencies.

## Tools and Libraries
- **Cypress**: Framework for end-to-end testing.
- **Faker.js**: Generates random data for test inputs.
- **Lighthouse** (optional): Measures accessibility and performance.
- **mochawesome**: Generates detailed test reports.

## Reporting
Test results are available in the `mochawesome-report` folder. To view the report:
1. Run the tests.
2. Open the generated HTML report:
   ```bash
   open mochawesome-report/index.html
   ```

