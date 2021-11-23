import { useState } from 'react'

function Quote(props) {
	const { quote } = props
	const [color] = useState(["red", "blue", "coral", "yellowgreen", "cyan", "brown", "cornflowerblue"])
	
	function randomColor(){
		return color[Math.floor(Math.random() * color.length)]
	}

		return (
			<div className='quote__container'>
				<section 
					key={quote._id} 
					className='quote'
					style={{backgroundImage: `linear-gradient(${randomColor()}, ${randomColor()})`}}
				>
					<p className='quote__quote'>
						{quote.quote}
					</p>
					<p className='quote__author'>
						Author: {quote.author}
					</p>
					{/* <p>Likes: {quote.likes}</p> */}
				</section>
			</div>
		)
	
}

export default Quote
