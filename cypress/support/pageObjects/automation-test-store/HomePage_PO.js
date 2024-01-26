class HomePage_PO {

    visitHomePage(){
        cy.visit(Cypress.env("automation_test_store_homepage"));
    }
    clickOnSpecificProductCategory(productCategory){
        //"Makeup"
        cy.xpath("//a[contains(@href, 'product/category&path=36')]").contains(productCategory).click()
    }
}

export default HomePage_PO