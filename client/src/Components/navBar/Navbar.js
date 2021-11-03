// import { useEffect, useState } from 'react'
import {Link } from '@reach/router'

function navbar() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				{/* <Link to="/hej">Quotes</Link> */}
			</nav>
		</>
	)
}

export default navbar
