import { useEffect, useState } from 'react'
import Comments from '../../Components/Comments/DisplayComments'
import Likes from '../../Components/Likes/Likes'

function Quote(props) {
	const { id } = props

	const [quote, setQuote] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const url = `http://localhost:8080/api/quotes/${id}/`
			const response = await fetch(url)
			const data = await response.json()
			setQuote(data)
		}
		fetchData()
	}, [])

    function addLike(id) {
		try {
			const data = {
				id: id,
				number: 1,
			}
			const like = async () => {
				const url = 'http://localhost:8080/api/quotes/'
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
				const url = 'http://localhost:8080/api/quotes/'
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

function changeLike(number){
	setQuote({...quote, likes: quote.likes += number})
}
function addComment(comment, id) {
    const data = {
        comment: comment,
        id: id,
    }
    const url = `http://localhost:8080/api/quotes/${id}/`
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
            setQuote({...quote, comments: newComment})
        }
        postComment()
    } catch {
        console.log('Fetch failled')
    }
}

	return (
		<>
			<article className='quote'>
				<p className='quote__quote'>
					<strong>{quote.quote}</strong>
				</p>
				<p className='quote__author'>
					<strong>~{quote.author}</strong>
				</p>
				<p>Likes: {quote.likes}</p>
			<Likes id={quote._id} addLike={addLike} addDislike={dislike} />
			{quote.comments && 
				<Comments comments={quote.comments} id={quote._id}  addComment={addComment} />
			}
			</article>
		</>
	)
}

export default Quote
