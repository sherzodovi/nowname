import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import './index.css'

function LostCategory() {
	const [category, setCategory] = useState([])

	useEffect(() => {
		getCategory()
	}, [])

	function getCategory() {
		axios.get('https://lostfoundapi.pythonanywhere.com/category/').then(res => {
			console.log(res.data)
			setCategory(res.data)
		})
	}

	return (
		<Nav justified tabs className='mb-5'>
			{category.map((item, i) => (
				<NavItem>
					<NavLink href='#'>{item.name}</NavLink>
				</NavItem>
			))}
		</Nav>
	)
}

export default LostCategory
