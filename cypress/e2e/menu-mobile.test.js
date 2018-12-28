describe('Testing Menu on Mobile Resolutions', () => {
	it('A click on menu icon must open the "Navigation Menu"', () => {
		cy.visit('/')

		cy.get('.menu-list__GjAF0LJL')
			.should('not.be.visible')

		cy.get('.menu-button__zc7H2Im3')
			.click()

		cy.get('header')
			.should('have.class', 'menuIsOpened')

		cy.get('.menu-button__zc7H2Im3')
			.click()

		cy.get('.menu-list__GjAF0LJL')
			.should('not.be.visible')


	})
})
