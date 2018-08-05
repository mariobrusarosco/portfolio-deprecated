import { compose, withHandlers } from 'recompose'

export default compose(
  withHandlers({
    test: ({ setHeaderAsFixed, isFixed }) => () => setHeaderAsFixed(!isFixed)
  })
)
