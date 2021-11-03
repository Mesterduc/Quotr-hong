import { useState } from 'react'


function Comments(props) {
    const { id, addComment } = props

    const [newComment, setNewComment] = useState('')

	return (
		<>
			<input className="comment__input" placeholder="Make a comment" onChange={(event) => {
								setNewComment(event.target.value)
							}}></input>
            <button className="comment__button" onClick={() => addComment(newComment, id)}>Comment</button>

        </>
	)
}

export default Comments
