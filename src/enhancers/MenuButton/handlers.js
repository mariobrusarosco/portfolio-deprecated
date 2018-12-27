import { compose, withHandlers } from 'recompose'
import { toggleMenu } from 'actions/ui'

export default compose(
	withHandlers({
		handleMenuToggle: ({ dispatch }) => e => {
			dispatch(toggleMenu())
		}
	})
)

