/// <reference types="Cypress" />


describe('Test contactUs from via automationstore website', () => {
    it('should be able submit successfully via contact form', () => {
        cy.visit("https://automationteststore.com/");
        // cy.get('.info_links_footer > :nth-child(5) > a').click();

        cy.xpath("//a[contains(@href,'contact')]").click().then((value)=> {
            console.log("After resolving the promice", value.text());
        })
        cy.xpath("//input[@id='ContactUsFrm_first_name']").type("danuka");
        cy.xpath("//input[@id='ContactUsFrm_email']").type("danuka.w@gmail.com");
        cy.xpath("//input[@id='ContactUsFrm_email']").should('have.attr', 'name','email')

        cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type("test");
        cy.xpath("//button[@title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        
    });
});