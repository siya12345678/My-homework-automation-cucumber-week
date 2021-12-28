$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccounttest.feature");
formatter.feature({
  "line": 1,
  "name": "Creating new account Test",
  "description": "",
  "id": "creating-new-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30789725400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to create new account with valid credentials",
  "description": "",
  "id": "creating-new-account-test;as-a-user-i-want-to-create-new-account-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User clicks on the sign in button from the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enters an email in the email address field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "clicks on create an account tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "fill all mandatory fields",
  "rows": [
    {
      "cells": [
        "James",
        "Bond",
        "abc12456",
        "123 Abc Street",
        "London",
        "Florida",
        "12345",
        "01234567890"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on register",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify my account text \"MY ACCOUNT\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify user can see his name on top right \"James Bond\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnTheSignInButtonFromTheHomepage()"
});
formatter.result({
  "duration": 2376572100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.entersAnEmailInTheEmailAddressField()"
});
formatter.result({
  "duration": 143826800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clicksOnCreateAnAccountTab()"
});
formatter.result({
  "duration": 99693700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.fillAllMandatoryFields(DataTable)"
});
formatter.result({
  "duration": 2418587900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clickOnRegister()"
});
formatter.result({
  "duration": 1839487400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 24
    }
  ],
  "location": "CreateAccountSteps.verifyMyAccountText(String)"
});
formatter.result({
  "duration": 51591000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Bond",
      "offset": 43
    }
  ],
  "location": "CreateAccountSteps.verifyUserCanSeeHisNameOnTopRight(String)"
});
formatter.result({
  "duration": 46977200,
  "status": "passed"
});
formatter.after({
  "duration": 669829800,
  "status": "passed"
});
formatter.before({
  "duration": 5011812300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to see an error message while trying",
  "description": "to create account with invalid credentials",
  "id": "creating-new-account-test;as-a-user-i-want-to-see-an-error-message-while-trying",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User clicks on the sign in button from the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enters an email in the email address field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "clicks on create an account tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "fill all mandatory fields",
  "rows": [
    {
      "cells": [
        "$%1234",
        "DD12**",
        "abc$%12456",
        "123 Abc Str%%t",
        "Lo$%^on",
        "Florida",
        "123ssa45",
        "0123abcd67890"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on register",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that invalid information will give an error message \"There are 6 errors\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnTheSignInButtonFromTheHomepage()"
});
formatter.result({
  "duration": 1678295300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.entersAnEmailInTheEmailAddressField()"
});
formatter.result({
  "duration": 146715700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clicksOnCreateAnAccountTab()"
});
formatter.result({
  "duration": 93840000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.fillAllMandatoryFields(DataTable)"
});
formatter.result({
  "duration": 2301346000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clickOnRegister()"
});
formatter.result({
  "duration": 1200472300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There are 6 errors",
      "offset": 60
    }
  ],
  "location": "CreateAccountSteps.verifyThatInvalidInformationWillGiveAnErrorMessage(String)"
});
formatter.result({
  "duration": 49103100,
  "status": "passed"
});
formatter.after({
  "duration": 656876700,
  "status": "passed"
});
formatter.uri("deletiontest.feature");
formatter.feature({
  "line": 1,
  "name": "Test for deleting item from cart",
  "description": "",
  "id": "test-for-deleting-item-from-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4612076300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to delete an item from the basket and see basket is empty",
  "description": "",
  "id": "test-for-deleting-item-from-cart;as-a-user-i-want-to-delete-an-item-from-the-basket-and-see-basket-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Adds item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "closes shopping cart window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify shopping cart has delete button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "removes item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verifies the banner display \"Your shopping cart is empty.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 242628200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 1681213500,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.addsItemToCart()"
});
formatter.result({
  "duration": 1505070700,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.closesShoppingCartWindow()"
});
formatter.result({
  "duration": 779648100,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.verifyShoppingCartHasDeleteButton()"
});
formatter.result({
  "duration": 287078000,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.removesItemFromCart()"
});
formatter.result({
  "duration": 101976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 29
    }
  ],
  "location": "DeletionTestSteps.verifiesTheBannerDisplay(String)"
});
formatter.result({
  "duration": 21677054900,
  "status": "passed"
});
formatter.after({
  "duration": 671640300,
  "status": "passed"
});
formatter.uri("storefinder.feature");
formatter.feature({
  "line": 1,
  "name": "Finding a store on the \u0027Our Stores\u0027 page",
  "description": "",
  "id": "finding-a-store-on-the-\u0027our-stores\u0027-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4727747200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify that user can drap the map to see a store from West Palm Beach",
  "description": "",
  "id": "finding-a-store-on-the-\u0027our-stores\u0027-page;verify-that-user-can-drap-the-map-to-see-a-store-from-west-palm-beach",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User clicks on the link from the homepage \"Our Stores\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts the alert",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "moves the map to be able to view a store from West Palm Beach",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "scrolls the map for a clear view",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "takes a screenshot for future reference",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Our Stores",
      "offset": 43
    }
  ],
  "location": "StoreFinderSteps.userClicksOnTheLinkFromTheHomepage(String)"
});
formatter.result({
  "duration": 1801529400,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.userAcceptsTheAlert()"
});
formatter.result({
  "duration": 80338400,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.movesTheMapToBeAbleToViewAStoreFromWestPalmBeach()"
});
formatter.result({
  "duration": 350361200,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.31.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c3c7efe6a26f96de7c01f2e5287a664c, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@655a01d8]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62744}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62744/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c3c7efe6a26f96de7c01f2e5287a664c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat com.automationpractice.pages.OurStoresPage.scrollMapToSeeWestPalmBeach(OurStoresPage.java:45)\r\n\tat com.automationpractice.cucumber.steps.StoreFinderSteps.movesTheMapToBeAbleToViewAStoreFromWestPalmBeach(StoreFinderSteps.java:23)\r\n\tat ✽.And moves the map to be able to view a store from West Palm Beach(storefinder.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StoreFinderSteps.scrollsTheMapForAClearView()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StoreFinderSteps.takesAScreenshotForFutureReference()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1008413200,
  "status": "passed"
});
formatter.uri("summerdressesoption.feature");
formatter.feature({
  "line": 1,
  "name": "Selecting a submenu from the main menu",
  "description": "",
  "id": "selecting-a-submenu-from-the-main-menu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5418173000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to view Summer Dresses option from the navigation menu",
  "description": "",
  "id": "selecting-a-submenu-from-the-main-menu;user-should-be-able-to-view-summer-dresses-option-from-the-navigation-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verifies the \"SUMMER DRESSES \" page verification text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 173409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 1886094200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES ",
      "offset": 14
    }
  ],
  "location": "SummerDressOptionSteps.verifiesThePageVerificationText(String)"
});
formatter.result({
  "duration": 38830100,
  "status": "passed"
});
formatter.after({
  "duration": 661541000,
  "status": "passed"
});
formatter.uri("summerdressespricerangetest.feature");
formatter.feature({
  "line": 1,
  "name": "Changing price range",
  "description": "",
  "id": "changing-price-range",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4252001700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to update the price range for the filter options",
  "description": "",
  "id": "changing-price-range;user-should-be-able-to-update-the-price-range-for-the-filter-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verifies the \"SUMMER DRESSES \" page verification text",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "moves the slider to change the price range",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 205880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 2555473800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES ",
      "offset": 14
    }
  ],
  "location": "SummerDressOptionSteps.verifiesThePageVerificationText(String)"
});
formatter.result({
  "duration": 46954700,
  "status": "passed"
});
formatter.match({
  "location": "PriceRangeTests.movesTheSliderToChangeThePriceRange()"
});
formatter.result({
  "duration": 422514100,
  "status": "passed"
});
formatter.after({
  "duration": 681465500,
  "status": "passed"
});
});