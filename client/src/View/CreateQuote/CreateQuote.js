import { useState } from 'react'

function CreateQuote() {
	const [newQuote, setNewQuote] = useState('')
	const [newAuthor, setNewAuthor] = useState('')
	const [error, setError] = useState('')
	const API_URL = process.env.REACT_APP_API

	function createQuote() {
		if (newQuote.length > 0 && newAuthor.length > 0) {
			try {
				postQuote()
				setError('')
				setNewAuthor('')
				setNewQuote('')
			} catch {}
		} else {
			setError('Missing input')
		}
	}
	async function postQuote() {
		const data = {
			quote: newQuote,
			author: newAuthor,
		}
		const url = `${API_URL}/quotes/`
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
	}

	return (
		<>
			<section className='quoteCreate'>
				<h1>Create quote</h1>
				<p className='quoteCreate__error'>{error}</p>
				<article className='quoteCreate__form'>
					<input
						placeholder='Author'
						onChange={(event) => {
							setNewAuthor(event.target.value)
						}}
						value={newAuthor}
					></input>
					<textarea
						placeholder='Insert quote'
						onChange={(event) => {
							setNewQuote(event.target.value)
						}}
						value={newQuote}
						rows='5'
					></textarea>
				</article>
				<button type='button' onClick={() => createQuote()}>
					Add Recipe
				</button>
			</section>
		</>
	)
}

export default CreateQuote
