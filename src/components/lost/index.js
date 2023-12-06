import { Container } from 'reactstrap'
import './index.css'
import Lostedcard from './losted-card/topilgan_box'
import LostCategory from './categorybutton'

function Lost() {
	return (
		<Container className='py-5'>
			<div>
				{/* <DemoNavbar /> */}
				<Container className='d-flex justify-content-center'>
					<LostCategory />
					<LostCategory />
					<LostCategory />
					<LostCategory />
				</Container>
				<div className='mt-5'>
					<Lostedcard />
				</div>
			</div>
		</Container>
	)
}

export default Lost
