// import { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import Quote from './Quote.js'
import DisplayComments from '../../Components/Comments/DisplayComments'
import Likes from '../../Components/Likes/Likes'

function Quotes(props) {
	const { quotes,addLike, addDislike, addComment } = props

	return (
		<>
			<section className='quotes'>
				{quotes.map((quote) => {
					return (
						<div key={quote._id}>
							<Link to={`/${quote._id}`}>
								<Quote quote={quote} />
							</Link>
							<Likes id={quote._id}  addLike={addLike} addDislike={addDislike} />

							<DisplayComments comments={quote.comments} id={quote._id} addComment={addComment} />
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Quotes
