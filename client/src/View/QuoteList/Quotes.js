// import { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import Quote from './Quote.js'
import DisplayComments from '../../Components/Comments/DisplayComments'
import Likes from '../../Components/Likes/Likes'
import Quote2 from '../Quote/Quote'

function Quotes(props) {
	const { quotes,addLike, addDislike, addComment } = props

	return (
		<>
			<section className='quotes'>
				{quotes.map((quote) => {
					return (
						<div key={quote._id}>
							<Link className="quotes__link" to={`/quote/${quote._id}`}>
								<Quote quote={quote} />
								{/* <Quote2 id={quote._id}  addLike={addLike} addDislike={addDislike} comments={quote.comments} addComment={addComment}/> */}

							</Link>
							{/* <Likes id={quote._id}  addLike={addLike} addDislike={addDislike} />
							<DisplayComments comments={quote.comments} id={quote._id} addComment={addComment} /> */}
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Quotes
