import { compose } from 'recompose'
import handlers from './handlers'
import data from './data'

export default compose(
	data,
	handlers
)
