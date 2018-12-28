import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from 'components/Header'
// Pages
import Home from 'pages/Home'

const Main = () =>
	<BrowserRouter>
		<>
			<Header />
			<Route path="/" component={Home} exact />
		</>
	</BrowserRouter>

export default Main
