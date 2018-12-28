import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Main from 'components/Main'
import store from 'store'

// Global Styles
import 'styles/main.styl'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#app')
)
