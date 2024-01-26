///<reference types="cypress"/>

describe('cypress web security', () => {

    it("Validate visiting two different domains",()=> {

        const users = {
            "firstName": "danuka",
            "lastName" : "Wijetunge",
            "age": 12,
            "student": [
                {
                    "name" : "daniesha",
                    "lastName": "Wijetungeeee"
                },
                {
                    "name" : "danieshi",
                    "lastName": "Wijetungeeee"
                }
            ]
        }

        cy.log(users.firstName);
        cy.log(users.student[0].name)
    });
});