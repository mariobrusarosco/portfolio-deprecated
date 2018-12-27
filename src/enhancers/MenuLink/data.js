import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = ({ ui: { currentSection }}) => ({
	currentSection
})

export default compose(
	connect(mapStateToProps)
)
