Feature: WebdriverUniversity login page

    # Scenario: Login using valid credentials
    #     Given I access the webdriverUniversity Login portal page
    #     When I enter a username webdriver
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following messaeg validation succeeded

    # Scenario: Login using valid credentials
    #     Given I access the webdriverUniversity Login portal page
    #     When I enter a username webdriveree
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following messaeg validation failed

    Scenario Outline: "Test login via webdriver portal"
        Given I access the webdriverUniversity Login portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following messaeg <message>

        Examples:
            | username   | password      | message               |
            | webdriver  | webdriver123  | validation succeeded  |
            | webdriveree| webdriver123  | validation failed     |

