// import { useEffect, useState } from 'react'
// import { Link, useLocation } from '@reach/router'

function Quote(props) {
	const { quote } = props
	
		return (
			<div className='quote__container'>
				<section key={quote._id} className='quote'>
					<p className='quote__quote'>
						<strong>{quote.quote}</strong>
					</p>
					<p className='quote__author'>
						<strong>Author: {quote.author}</strong>
					</p>
					<p>Likes: {quote.likes}</p>
				</section>
			</div>
		)
	
}

export default Quote
