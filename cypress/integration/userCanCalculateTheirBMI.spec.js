describe('BMI Calculator', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Calculates BMI in metric',() => {
        cy.get('select#method-selector').select('metric');
        cy.get('input#weight').type(90);
        cy.get('input#height').type(190);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', "You'r BMI value is: 24.93, youre Normalweight")
    })
    it('Calculates BMI in imperial', () => {
        cy.get('select#method-selector').select('imperial');
        cy.get('input#weight').type(198);
        cy.get('input#height').type(74);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', "You'r BMI value is: 25.42, youre overweight")  
    })
})
