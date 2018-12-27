import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = ({ ui: { menuIsOpened }}) => ({
	menuIsOpened
})

export default compose(
	connect(mapStateToProps)
)
