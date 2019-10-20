describe("Valid Inputs + Success Confirmation", function() {
    it("Check if all the inputs are filled and load a success page", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Nicolle')

        cy.get("input[name='cc_number']").type('1234567890123456')

        cy.get("input[name='exp_date']").type('1220')

        cy.get("input[name='cvv']").type('123')

        cy.contains('confirm payment').click()

        cy.get('p').should(($p) => {
            const text = $p.text()
            expect(text).to.match(/success/)

        })
    });
});

describe("Invalid Input (Name)", function() {
    it("Fill all the inputs + check if the wrong input is detected", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Ni')

        cy.get("input[name='cc_number']").type('1234567890123456')

        cy.get("input[name='exp_date']").type('1220')

        cy.get("input[name='cvv']").type('123')

        cy.contains('confirm payment').click()

        cy.get("input[name='name']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
    });
});

describe("Invalid Input (Credit Card Number)", function() {
    it("Fill all the inputs + check if the wrong input is detected", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Nicolle')

        cy.get("input[name='cc_number']").type('12345678901234')

        cy.get("input[name='exp_date']").type('1220')

        cy.get("input[name='cvv']").type('123')

        cy.contains('confirm payment').click()

        cy.get("input[name='cc_number']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
    });
});

describe("Invalid Input (Exp Date)", function() {
    it("Fill all the inputs + check if the wrong input is detected", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Nicolle')

        cy.get("input[name='cc_number']").type('1234567890123456')

        cy.get("input[name='exp_date']").type('1420')

        cy.get("input[name='cvv']").type('123')

        cy.contains('confirm payment').click()

        cy.get("input[name='exp_date']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
    });
});

describe("Invalid Input (CVV)", function() {
    it("Fill all the inputs + check if the wrong input is detected", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Nicolle')

        cy.get("input[name='cc_number']").type('1234567890123456')

        cy.get("input[name='exp_date']").type('1220')

        cy.get("input[name='cvv']").type('1')

        cy.contains('confirm payment').click()

        cy.get("input[name='cvv']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
    });
});

describe("Invalid Inputs", function() {
    it("Fill all the inputs + check if the wrong input is detected", function() {
        cy.visit('http://localhost:8080/')

        cy.get("input[name='name']").type('Ni')

        cy.get("input[name='cc_number']").type('12345678901234')

        cy.get("input[name='exp_date']").type('1420')

        cy.get("input[name='cvv']").type('1')

        cy.contains('confirm payment').click()

        cy.get("input[name='name']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get("input[name='cc_number']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get("input[name='exp_date']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get("input[name='cvv']").invoke('css', 'color', 'rgb(255, 0, 0)').should('have.css', 'color', 'rgb(255, 0, 0)')
    });
});