import { LOCK_HEADER } from '../actions/action-types'

const initialState = {
	scrollUp: false,
	scrollDown: false,
	fixedHeader: false,
	currentSection: 0
}

const ui = (state = initialState, action) => {
	switch(action.type) {
		case LOCK_HEADER:
		 return {
			 ...state,
			  fixedHeader: true
			}

		default:
			return state
	}
}

export default ui
