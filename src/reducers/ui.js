import { LOCK_HEADER, TOGGLE_MENU, SELECT_SECTION } from 'actions/action-types'

export const initialState = {
	scrollUp: false,
	scrollDown: false,
	fixedHeader: false,
	currentSection: 0,
	menuIsOpened: false
}

const ui = (state = initialState, action) => {
	switch(action.type) {
		case LOCK_HEADER:
		 return {
			 ...state,
			  fixedHeader: true
			}
		case TOGGLE_MENU:
			return {
				...state,
				menuIsOpened: !state.menuIsOpened
			}
		case SELECT_SECTION:
			// debugger
			return {
				...state,
				currentSection: action.sectionId,
			}
		default:
			return state
	}
}

export default ui
