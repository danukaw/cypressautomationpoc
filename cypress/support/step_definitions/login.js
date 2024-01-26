/// <reference types="Cypress" />
import { And, Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
// const pino = require('pino')
// const transport = pino.transport({
//   targets: [{
//     level: 'info',
//     target: 'pino-pretty' // must be installed separately
//   }, {
//     level: 'trace',
//     target: 'pino/file',
//     options: { destination: '/path/to/store/logs' }
//   }]
// })
// pino(transport)

let stub;

Before(()=>{
    cy.log("executi;ng before steps");
    stub = cy.stub();
})

Given("I access the webdriverUniversity Login portal page", () => {
    cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username {word}", (userName) => {
    cy.xpath('//input[@type="text"]').type(userName);
    //logger.info("Hello World");
})

And("I enter a password {word}", (pw)=>{
    cy.xpath('//input[@type="password"]').type(pw);
})

And("I click on the login button", ()=> {
    cy.xpath('//button[@id="login-button"]').click()
    cy.on("window:alert", stub)
})

Then("I should be presented with the following messaeg {word} {word}", (message1, message2) => {

    let expectedMessage = `${message1} ${message2}`;

    expect(stub.getCall(0)).to.be.calledWith(expectedMessage)
})