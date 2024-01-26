/// <reference types="Cypress" />

describe('Verifying variables, cypress commands  and jquery commands', () => {
    it('Navigating to specific pages in the store', () => {

        cy.visit("https://automationteststore.com/");

        // const makeUp = cy.xpath("a[href*='product/category&path=']").contains('Makeup');
        // makeUp.click();
        // const skinCare = cy.xpath("a[href*='product/category&path=']").contains('Skincare');
        // skinCare.click( )
        cy.xpath("//a[contains(@href, 'product/category&path=36')]").contains("Makeup").click()
        //cy.xpath("//a[contains(@href, 'product/category&path=36')]").contains("Skincare").click()
        cy.xpath("//h1[contains(.,Makeup)]").then((headerText) => {
            cy.log("HEAD TEXT IS", headerText.text())
            const actualVal = headerText.text();
            expect(actualVal.trim()).is.eq("Makeup");

        })

    });

    it('Validate properties inside the contact US page', () => {

        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // cypress way of doing it
        cy.contains('#ContactUsFrm', 'Contact Us Form').find("#field_11").should('contain','First name')

        // jQuery 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const textVal = text.find("#field_11").text();

            expect(textVal).to.contain("First name")

        })


    });
});