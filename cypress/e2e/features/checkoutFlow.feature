Feature: Checkout Flow
# this is the first scenario, i make with outline for the viewports in desktop and mobile resolution, there's other ways to do this
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

# this is the optional scenario, make the first scenario and add the optional steps with viewports options
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