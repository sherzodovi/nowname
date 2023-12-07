import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'

function LostCategory() {
	const [category, setCategory] = useState([])

	useEffect(() => {
		getCategory()
	}, [])

	function getCategory() {
		axios.get('https://lostfoundapi.pythonanywhere.com/category/').then(res => {
			setCategory(res.data)
		})
	}

	return (
		// <Button className='btn-icon btn-3 ml-1' color='primary' type='button'>

		// 	<span className='btn-inner--text'></span>
		// </Button>
		<div className='bnt_c'>
			{category.map((item, i) => (
				<div></div>
			))}
		</div>
	)
}

export default LostCategory
