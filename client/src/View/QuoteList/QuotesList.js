import { useEffect, useState } from 'react'
import Quotes from './Quotes'


function QuotesList(props) {
	const  {quotes, addLike, dislike, addComment} = props
	

	return (
		<>
			<h1 className='quotes__header'>Gods Quotes</h1>
			<ul>
				<Quotes quotes={quotes} addLike={addLike} addDislike={dislike} addComment={addComment} />
			</ul>
		</>
	)
}

export default QuotesList
