// import { useEffect, useState } from 'react'
// import { Router, Link } from '@reach/router'
// import Quote from './Quote.js'

function Likes(props) {
	const { id, addLike, addDislike } = props

	// function like(id) {
	// 	const data = {
	// 		id: id,
	// 		number: 1,
	// 	}
	// 	const url = 'http://localhost:8080/api/quotes'
	// 	fetch(url, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// }
	// function dislike(id) {
	// 	const data = {
	// 		id: id,
	// 		number: -1,
	// 	}
	// 	const url = 'http://localhost:8080/api/quotes'
	// 	fetch(url, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// }

	return (
		// <section className='likes'>
		// 	<button onClick={() => like({id})}>Like</button>
		// 	<button onClick={() => dislike({id})}>Dislike</button>
		// </section>
		<section className='likes'>
			<button onClick={() => addLike(id)}>Like</button>
			<button onClick={() => addDislike(id)}>Dislike</button>
		</section>
	)
}

export default Likes
