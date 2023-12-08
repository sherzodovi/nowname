import { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function LostCard(src, title, des, update) {
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	return (
		<>
			<div class='ccc card-deck'>
				<div class='card' onClick={toggle}>
					<img class='card-img-top' src={src} alt='Card image cap' />
					<div class='card-body'>
						<h5 class='card-title'>{title}</h5>
						<p class='card-text'>{des}</p>
					</div>
					<div class='card-footer'>
						<small class='text-muted'>{update}</small>
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
							<img src={src} alt='' className='wd-20 rounded' />
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

export default LostCard