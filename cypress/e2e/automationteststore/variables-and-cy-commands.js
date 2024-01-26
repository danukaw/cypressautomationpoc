import HomePage_PO from "../../support/pageObjects/automation-test-store/HomePage_PO";
/// <reference types="Cypress" />

describe('Iterate over elements', () => {

    const homePage = new HomePage_PO()


    beforeEach(function () {

        homePage.visitHomePage();
        homePage.clickOnSpecificProductCategory("Makeup");
        
    });

    it('Log information of all skin care products', () => {

        cy.xpath("//h1[contains(.,Makeup)]").then((headerText) => {
            cy.log("HEAD TEXT IS", headerText.text())
            const actualVal = headerText.text();
            expect(actualVal.trim()).is.eq("Makeup");

        })

    });

    it('Click one of the product and add It to bascket', () => {
        cy.addProduct('Tropiques Minerale Loose Bronzer');
    });

    it('Click one of the product and add It to bascket', () => {
        cy.addProduct('Waterproof Protective Undereye Concealer');
    });
    
});