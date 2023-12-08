import { Link } from 'react-router-dom'

import { Card, CardBody, CardHeader, Col, Container } from 'reactstrap'
import img from '../../../assets/img/theme/team-1-800x800.jpg'
import '../../../globalcss/global.css'
import './index.css'

function Category() {
	return (
		<Container className='nn'>
			<Col className='xxxx  flex-between'>
				<Card className='card m-5'>
					<CardHeader className=''>
						<img src={img} alt='' className='wd-100' />
					</CardHeader>
					<CardBody>
						<h2 >Yuqotilgan Buyumlar</h2>
						<Link to='/Lost' className='btn btn-primary'>
							More
						</Link>
					</CardBody>
				</Card>
				<Card className='card m-5'>
					<CardHeader className=''>
						<img src={img} alt='' className='wd-100' />
					</CardHeader>
					<CardBody>
						<h2>Topilgan Buyumlar</h2>
						<Link to='/found' className='btn btn-primary'>
							More
						</Link>
					</CardBody>
				</Card>
			</Col>
		</Container>
	)
}

export default Category
