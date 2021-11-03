import {useState } from 'react'

function CreateQuote(props) {
	const { addQuote } = props

	const [newQuote, setNewQuote] = useState('')
	const [newAuthor, setNewAuthor] = useState('')
	return (
		<>
			<section className='quoteCreate'>
				<h1>Create quote</h1>
				<article className='quoteCreate__form'>
					<input
						placeholder='Author'
						onChange={(event) => {
							setNewAuthor(event.target.value)
						}}
					></input>
						<textarea
							placeholder='Insert quote'
							onChange={(event) => {
								setNewQuote(event.target.value)
							}}
							rows='5'
						></textarea>
				</article>
				<button type='button' onClick={() => addQuote(newQuote, newAuthor)}>
					Add Recipe
				</button>
			</section>
		</>
	)
}

export default CreateQuote
