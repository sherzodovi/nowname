import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import img from '../../../assets/img/theme/team-1-800x800.jpg'
import './topilgan_box.css'

function Lostedcard() {

	const [lost, setLost] = useState([])

	useEffect(() => {
		getLost()
	}, [])

	function getLost() {
		axios.get("https://lostfoundapi.pythonanywhere.com/item/").then((res) =>{
			setLost(res.data)
		})
		.catch(() => {})
	}
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	
	return (
		<>
			<div class='ccc card-deck'>
				<div class='card' onClick={toggle}>
					<img class='card-img-top' src={img} alt='Card image cap' />
					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>



					</div>
					<div class='card-footer'>
						<small class='text-muted'>Last updated 3 mins ago</small>
					</div>
				</div>
				<div class='card' onClick={toggle}>
					<img class='card-img-top' src={img} alt='Card image cap' />
					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
					</div>
					<div class='card-footer'>
						<small class='text-muted'>Last updated 3 mins ago</small>
					</div>
				</div>
				<div class='card' onClick={toggle}>
					<img class='card-img-top' src={img} alt='Card image cap' />
					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
					</div>
					<div class='card-footer'>
						<small class='text-muted'>Last updated 3 mins ago</small>
					</div>
				</div>

				<Modal
					isOpen={modal}
					toggle={toggle}
					fullscreen
					className='w-75 float-right mx-3'
				>
					<ModalHeader toggle={toggle}>describtion losted thing</ModalHeader>
					<ModalBody className='px-3'>
						<div className=' y-center'>
							<img src={img} alt='' className='wd-20 rounded' />
							<h4 className='ml-3'>Lorem ipsum dolor sit.</h4>
						</div>
						<div className='y-center mt-3 bg-success border-5 px-3 text-wight w-m-content'>
							<b>Yoqolgan vaqti: </b>
							<p> 20.20.2012 </p>
						</div>
						<div className='mt-4'>
							<h5>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
								iure alias nisi animi eum maiores.
							</h5>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button color='primary' onClick={toggle}>
							habar berish
						</Button>{' '}
						<Button color='secondary' onClick={toggle}>
							Orqaga
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		</>
	)
}

export default Lostedcard
