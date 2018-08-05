import { compose } from 'recompose'
import state from './state.js'
import handlers from './handlers.js'

export default compose(
  handlers,
  state
)
