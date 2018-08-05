import { compose, withState } from 'recompose'

export default compose(
  withState('isFixed', 'setHeaderAsFixed', false)
)
