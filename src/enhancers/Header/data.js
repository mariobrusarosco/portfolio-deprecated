import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = ({ ui }) => ({
	menuIsOpened: ui.menuIsOpened
})

export default compose(
	connect(mapStateToProps)
)
