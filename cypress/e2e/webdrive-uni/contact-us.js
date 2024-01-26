import ContactUs_PO from '../../support/pageObjects/webdriver-uni/ContactUs_PO';
import HomePage_PO from '../../support/pageObjects/webdriver-uni/HomePage_PO';

/// <reference types="Cypress" />

describe("Test contactus from via webdriveuni", ()=> {

    const contactUsFormSubmission = new ContactUs_PO();
    const homePagePO = new HomePage_PO();

      

    before(function(){
        cy.fixture('userDetails').then(function(data) {
            globalThis.data = data;
        })
    })

    beforeEach(function(){      
        homePagePO.visitHomePage();
        cy.wait(3000)
        homePagePO.clickOn_ContactUs_Button();
    })
    
    it("Should be able to submit successfull contact-us form submission", ()=> {
        
        cy.origin("http://www.google.com", ()=>{
        
        const myModule = Cypress.require('pino')();
        const fs = Cypress.require('fs');
        const logFilePath = "file.log"


        // const logFileStream = fs.createWriteStream(logFilePath, { flags: 'a' });
        // const logger = pino({ level: 'info' }, logFileStream);


        // //  const fileTransport = myModule.transport({
        // //     target: 'pino/file',
        // //     options: { destination: `./test.log` },
        // //   });
           
        // //   const logger = myModule(
        // //     {
        // //       level: process.env.PINO_LOG_LEVEL || 'info',
        // //       formatters: {
        // //         level: (label) => {
        // //           return { level: label.toUpperCase() };
        // //         },
        // //       },
        // //       timestamp: pino.stdTimeFunctions.isoTime,
        // //     },
        // //     fileTransport
        // //   );
        
        myModule.info("dfsdfgsdfgsdfgs")

    })

        cy.document().should('have.property','charset').and('eq','UTF-8');
        cy.title().should('include',"WebDriver | Contact Us");
        cy.url().should('include',"contactus");

        contactUsFormSubmission.contactUsFormSubmission(Cypress.env("first_name"), data.last_name, data.email, "Text Aria","h1","Thank You for your Message!")

    })

    it("Should not be able to submit successfull contact-us form submission", ()=> {
        // cypress code goes
        contactUsFormSubmission.contactUsFormSubmission(data.first_name, data.last_name, null, "Text Aria","body","Error: Invalid email address")
    })
})