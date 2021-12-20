describe('Create new campaign', function(){
    // Given a user visits website 'https://app-qa.phrasee.co'
    it('Visits the Phrasee app', function(){
        cy.visit('https://app-qa.phrasee.co')
        
    // User enters username, password and clicks login button
        cy.get('[data-cy="login-email"]')
        .type('ravishankarste@gmail.com')

        cy.get('[data-cy="login-password"]')
        .type('Ravishankar123#')

        cy.get('[title="Login"]')
        .should('have.class', 'ant-btn-lg')
        .click()

    // Click on Create a new campaign
        cy.get('[href="/campaign"]')
        .contains('Create new campaign')
        .click()
    // Verify user is on correct url
        cy.url()
        .should('include', '/campaign')
    
    // Select Email tab
        cy.get('[data-cy="email"]')
        .click()
    
   // Select Project 'External automation project' from dropdown
    cy.get('[class="ant-select-selection__placeholder"]')
    .contains('Select your project')
    .click()
    cy.contains('External automation project')
    .click()
    
    // Type any name as campaign name for example 'test'
    cy.get('[data-cy="campaign-setup-campaign-name"]')
    .type('Test')
    
    // Type control subject line for example 'human line'
    cy.get('[data-cy="campaign-setup-campaign-own-sl"]')
    .type('Test')
    
    // Fill in expected audience size for example '500000'
    cy.get('[data-cy="campaign-setup-list-size"]')
    .type('500000')

    // Avg open rate anything between 1 to 100
    cy.get('[data-cy="campaign-setup-baseline-open-rate"]')
    .type('25')

    // click on Next button
    cy.get('[data-cy="campaign-setup-submit-button"]')
    .type('25')
    
    // Select date from date picker
    cy.waitFor('When will you send the email')
    cy.get('[class="anticon anticon-calendar ant-calendar-picker-icon"]')
    .click()
    cy.contains('Today')
    .click()

    // Select campaign type and percentage
    cy.xpath("//div[contains(text(), 'Select')]")
    .click()
    cy.waitFor('Brand')
    cy.get('[data-cy="Brand"]')
    .click()
    cy.get('[data-cy="text_short"]')
    .type('Besty')

    // Click Magic button
    cy.get('[data-cy="lng-generation-magic-button"]')
    .click()

    })
})
