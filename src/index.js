import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// COMPONENTS
import App from 'components/App'

console.log(`I'm the one who knocks`)

render(
	<App />
  ,document.querySelector('[data-js="app"]')
)
