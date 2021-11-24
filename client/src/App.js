import Navbar from './Components/navBar/Navbar'
import { Router } from '@reach/router'
import './styles.css'
import QuotesList from "./View/QuoteList/QuotesList.js"
import Quote from './View/Quote/Quote.js'
import CreateQuote from './View/CreateQuote/CreateQuote.js'
import { useEffect, useState } from 'react'
const API_URL = process.env.REACT_APP_API

function App() {
  const [quotes, setQuotes] = useState([])

	useEffect(() => {
		getQuotes()
	}, [])

	async function getQuotes() {
		const url = `${API_URL}/quotes/`
		const response = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		setQuotes(data)
	}

	function addLike(id) {
		try {
			const data = {
				id: id,
				number: 1,
			}
			const like = async () => {
				const url = `${API_URL}/quotes/`
				const response = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				// const re = await response.json()
				if (!response.ok) {
					throw 'fejl'
				}
				changeLike(quotes, id, 1)
			}
			like()
		} catch {
			console.log('fejl')
		}
	}

	function dislike(id) {
		try {
			const data = {
				id: id,
				number: -1,
			}
			const like = async () => {
				const url = `${API_URL}/quotes/`
				const response = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				// const re = await response.json()
				if (!response.ok) {
					throw 'fejl'
				}

				changeLike(quotes, id, -1)
			}
			like()
		} catch {
			console.log('fejl')
		}
	}

	function changeLike(quotes, id, number) {
		const changeQuote = quotes.map((quote) => {
			if (quote._id == id) {
				quote.likes += number
			}
			return quote
		})

		setQuotes(changeQuote)
	}

	function addComment(comment, id) {
		const data = {
			comment: comment,
			id: id,
		}
		const url = `${API_URL}/quotes/${id}/`
		try {
			const postComment = async () => {
				const response = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				const re = await response.json()
				if (!response.ok) {
					throw re
				}
				const addToState = quotes.map((quote) => {
					if (quote._id == id) {
						quote.comments.push(comment)
					}
					return quote
				})

				setQuotes(addToState)
			}
			postComment()
		} catch {
			console.log('Fetch failled')
		}
	}
  function findQuote(id){
      return quotes.find(quote =>  quote._id == id)
  }
	return (
		<main>
			<Navbar />
			<Router>
					<QuotesList path='/' quotes={quotes} addLike={addLike} addDislike={dislike} addComment={addComment}></QuotesList>
					<Quote path='/quote/:id' findQuote={findQuote}></Quote>
          <CreateQuote path='/createQuote/' ></CreateQuote>
			</Router>
		</main>
	)
}

export default App
