// import { useEffect, useState } from 'react'
// import { Router, Link } from '@reach/router'
import CreateComments from './CreateComments'

function Comments(props) {
	const { comments, id, addComment } = props

	return (
		<section className='comments'>
			<CreateComments id={id} addComment={addComment}/>
			{comments &&
				comments.map((comment, index) => {
					return (
						<div className='comment' key={index} >
							<p>{comment}</p>
						</div>
					)
				})}
		</section>
	)
}

export default Comments
