import { compose } from 'recompose'
import { connect } from 'react-redux'

export default compose(
	connect( ({ ui: { menuIsOpened} }) => ({
		menuIsOpened
	}))
)
