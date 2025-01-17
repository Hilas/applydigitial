Feature: Checkout Flow

Scenario Outline: Add item to checkout without registered user in <resolution>
    Given I enter to the website "<resolution>"
    When I enter the third product shown in the product list
    And I add the product to the cart
    And I validate the product is correctly added to the checkout page
    Then Validate the register modal if i click the checkout button for finish the order

    Examples:
        |  resolution  |
        |  Desktop     |
        |  Mobile      |

Scenario Outline: Add item to checkout with new user register <resolution>
    Given I enter to the website "<resolution>"
    When I enter the third product shown in the product list
    And I add the product to the cart
    And I validate the product is correctly added to the checkout page
    And Validate the register modal if i click the checkout button for finish the order
    And register a new user
    And i go to the cart and finish the order
    Then i logout

    Examples:
        |  resolution  |
        |  Desktop     |
        |  Mobile      |