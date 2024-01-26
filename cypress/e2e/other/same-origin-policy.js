///<reference types="cypress"/>

describe('cypress web security', () => {
    it("Validate visiting two different domains",()=>{
        cy.visit("http://webdriveruniversity.com/");
        cy.visit("https://www.google.com")
    })

    it('Validating visiting two differnt domains via user action', () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click()
        
    });
});