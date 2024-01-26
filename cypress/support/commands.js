

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("addProduct", (productName) => {
  cy.get(".fixed_wrapper ,prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add(
  "addWebUniContactForm",
  (firstName, lastName, email = "", textArea, selector, message) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    email ? cy.get('[name="email"]').type(email) : "";
    cy.get("textarea.feedback-input").type(textArea);
    cy.get('[type="submit"]').click();
    cy.xpath(`//${selector}[contains(.,'${message}')]`).contains(`${message}`);

  }
);

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
