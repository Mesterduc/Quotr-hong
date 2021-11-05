import { useEffect, useState } from 'react'
import { Router } from '@reach/router'

import Quotes from './Quotes'
import CreateQuotes from './CreateQuote'

function QuotesMain() {
	const [quotes, setQuotes] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const url = '/api/quotes/'
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
		fetchData()
	}, [])

	function addQuote(newQuote, newAuthor) {
		try {
			const data = {
				quote: newQuote,
				author: newAuthor,
			}
			const postData = async () => {
				const url = '/api/quotes/'
				const response = await fetch(url, {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				const reply = await response.json()
				if (!response.ok) {
					throw reply
				}
				setQuotes([...quotes, reply])
			}
			postData()
		} catch {}
	}

	function addLike(id) {
		try {
			const data = {
				id: id,
				number: 1,
			}
			const like = async () => {
				const url = 'http://localhost:8080/api/quotes/'
				const response = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				const re = await response.json()
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
				const url = 'http://localhost:8080/api/quotes/'
				const response = await fetch(url, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
				const re = await response.json()
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

function changeLike(quotes, id, number){
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
		const url = `http://localhost:8080/api/quotes/${id}/`
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
				const addToState = quotes.map((quote) => 
				{
					if (quote._id == id) {
						quote.comments.push(comment)
					}
					return quote
				}
				)
		
				setQuotes(addToState)
			}
			postComment()
		} catch {
			console.log('Fetch failled')
		}
	}

	return (
		<>
			<CreateQuotes addQuote={addQuote} />
			<h1 className='quotes__header'>Display Quotes</h1>
			<ul>
				<Quotes quotes={quotes} addLike={addLike} addDislike={dislike} addComment={addComment} />
			</ul>
		</>
	)
}

export default QuotesMain
