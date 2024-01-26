class ContactUs_PO {

   contactUsFormSubmission(firstName, lastName, email = "", textArea, selector, message) {

          cy.get('[name="first_name"]').type(firstName);
          cy.get('[name="last_name"]').type(lastName);
          email ? cy.get('[name="email"]').type(email) : "";
          cy.get("textarea.feedback-input").type(textArea);
          cy.get('[type="submit"]').click().debug();
          cy.xpath(`//${selector}[contains(.,'${message}')]`).contains(`${message}`);
      
    }
      
}

export default ContactUs_PO