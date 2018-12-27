// Action
import { toggleMenu } from '../../actions'
// Reducer
import { uiInitialState } from '../../reducers/ui'

describe('User Interface actions', () => {
	test(`should return an object with a type property of 'TOGGLE_MENU'`, () => {
		expect(toggleMenu()).toEqual({ 'type': 'TOGGLE_MENU' })
	})

	test(`The App's menu should be closed by default`, () => {
		const uiState = uiReducer()

		expect(toggleMenu()).toEqual({ 'type': 'TOGGLE_MENU' })
	})
})
