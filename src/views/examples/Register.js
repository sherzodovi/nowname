import React from 'react'

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from 'reactstrap'

import SimpleFooter from 'components/Footers/SimpleFooter.js'
import DemoNavbar from 'components/Navbars/DemoNavbar.js'

class Register extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.main.scrollTop = 0
	}

	render() {
		return (
			<>
				<DemoNavbar />
				<main ref='main'>
					<section className='section section-shaped section-lg'>
						<div className='shape shape-style-1 bg-gradient-default'>
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<Container className='pt-lg-7'>
							<Row className='justify-content-center'>
								<Col lg='5'>
									<Card className='bg-secondary shadow border-0'>
										<CardHeader className='bg-white pb-5'>
											<div className='text-muted text-center mb-3'>
												<big>Sign up with</big>
											</div>
											<div className='text-center'></div>
										</CardHeader>
										<CardBody className='px-lg-5 py-lg-5'>
											<div className='text-center text-muted mb-4'>
												<small>Or sign up with credentials</small>
											</div>
											<Form role='form'>
												<FormGroup>
													<InputGroup className='input-group-alternative mb-3'>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='ni ni-hat-3' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Enter your phone number'
															type='number'
														/>
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className='input-group-alternative mb-3'>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='ni ni-email-83' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Enter your user name'
															type='text'
														/>
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className='input-group-alternative'>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='ni ni-lock-circle-open' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Password'
															type='password'
															autoComplete='off'
														/>
													</InputGroup>
												</FormGroup>
												<div className='text-muted font-italic'>
													<small>
														password strength:{' '}
														<span className='text-success font-weight-700'>
															strong
														</span>
													</small>
												</div>
												<Row className='my-4'>
													<Col xs='12'>
														<div className='custom-control custom-control-alternative custom-checkbox'>
															<input
																className='custom-control-input'
																id='customCheckRegister'
																type='checkbox'
															/>
															<label
																className='custom-control-label'
																htmlFor='customCheckRegister'
															>
																<span>
																	I agree with the{' '}
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}
																	>
																		Privacy Policy
																	</a>
																</span>
															</label>
														</div>
													</Col>
												</Row>
												<div className='text-center'>
													<Button
														className='mt-4'
														color='primary'
														type='button'
													>
														Create account
													</Button>
												</div>
											</Form>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</section>
				</main>
				{/* <SimpleFooter /> */}
			</>
		)
	}
}

export default Register
