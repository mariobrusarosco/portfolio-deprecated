import { compose } from 'recompose'
import propsMapper from './propsMapper.js'
import data from './data'
import handlers from './handlers'

export default compose(
	data,
	handlers,
	propsMapper,
)
