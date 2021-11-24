import { useEffect, useState } from 'react'
import Comments from '../../Components/Comments/DisplayComments'
import Likes from '../../Components/Likes/Likes'
import Quotes from '../QuoteList/Quote'
const API_URL = process.env.REACT_APP_API

function Quote(props) {
	const { id, findQuote } = props
	const [quote, setQuote] = useState({})
	
	useEffect(() => {
		if(findQuote(id)){
			setQuote(findQuote(id))
			console.log("1")
		}else {
			const fetchData = async () => {
				const url = `${API_URL}/quotes/${id}`
				const response = await fetch(url)
				const data = await response.json()
				setQuote(data)
			}
			fetchData()
			console.log("fetch")
		}
	}, [])
	
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
				const re = await response.json()
				if (!response.ok) {
					throw 'fejl'
				}
				changeLike(1)
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
				const re = await response.json()
				if (!response.ok) {
					throw 'fejl'
				}

				changeLike(-1)
			}
			like()
		} catch {
			console.log('fejl')
		}
	}

	function changeLike(number) {
		setQuote({ ...quote, likes: (quote.likes += number) })
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
				let newComment = [...quote.comments, comment]
				setQuote({ ...quote, comments: newComment })
			}
			postComment()
		} catch {
			console.log('Fetch failled')
		}
	}

	return (
		<section>

			<Quotes quote={quote} />
			<h1>{quote.likes}</h1>
			<Likes id={quote._id} addLike={addLike} addDislike={dislike} />
			<Comments comments={quote.comments} id={quote._id} addComment={addComment} />
		</section>
	)
}

export default Quote
