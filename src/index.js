import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// COMPONENTS
import App from 'components/App'

console.log(`I'm the one who knocks`)

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]')
)

if (module.hot) {
  module.hot.accepts('./components/App', () => {
    const NextApp = require('./components/App').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('[data-js="app"]')
    )
  })
}
