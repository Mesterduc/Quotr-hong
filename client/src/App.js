import Navbar from './Components/navBar/Navbar'
import { Router } from '@reach/router'
import './styles.css'
import QuotesList from "./View/QuoteList/QuotesList.js"
import Quote from './View/Quote/Quote.js'
import CreateQuote from './View/CreateQuote/CreateQuote.js'

function App() {
	return (
		<main>
			<Navbar />
			<Router>
					<QuotesList path='/'></QuotesList>
					<Quote path='/quote/:id'></Quote>
          <CreateQuote path='/createQuote/'></CreateQuote>
			</Router>
		</main>
	)
}

export default App
