import { TOGGLE_MENU, SELECT_SECTION } from './action-types'

export const toggleMenu = () => ({
	type: TOGGLE_MENU
})

export const selectSection = sectionId => ({
	type: SELECT_SECTION,
	sectionId
})
