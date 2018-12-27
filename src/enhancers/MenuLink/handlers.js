import { compose, withHandlers } from 'recompose'
import { selectSection } from 'actions/ui'

export default compose(
	withHandlers({
		handleSelectSection: ({ dispatch, linkId }) => (f) => {
			dispatch(selectSection(linkId))
		}
	})
)
