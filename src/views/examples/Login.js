/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

// reactstrap components
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

// core components
import axios from 'axios'
import SimpleFooter from 'components/Footers/SimpleFooter.js'
import DemoNavbar from 'components/Navbars/DemoNavbar.js'
import { ToastContainer, toast } from 'react-toastify'

function getLogin() {
	axios
		.post('https://lostfoundapi.pythonanywhere.com/login/', {
			phone_number: document.getElementById("phoneNumber"),
			password: document.getElementById("password"),
		})
		.then(res => {
      toast.success(res.data.detail)
    })
    .catch((err) => {
      toast.error(err.data.detail)
    })
}

class Login extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.main.scrollTop = 0
	}
	render() {
		return (
			<>
				<DemoNavbar />
        <ToastContainer/>
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
												<h4>Log In</h4>
											</div>
											<div className='btn-wrapper text-center'>
												{/* <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button> */}
											</div>
										</CardHeader>
										<CardBody className='px-lg-5 py-lg-5'>
											<Form role='form'>
												<FormGroup className='mb-3'>
													<InputGroup className='input-group-alternative'>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='ni ni-email-83' />
															</InputGroupText>
														</InputGroupAddon>
														<Input id='phoneNumber' placeholder='Phone Number' type='text' />
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
                            id='password'
															placeholder='Password'
															type='password'
															autoComplete='off'
														/>
													</InputGroup>
												</FormGroup>
												<div className='custom-control custom-control-alternative custom-checkbox'>
													<input
														className='custom-control-input'
														id=' customCheckLogin'
														type='checkbox'
													/>
													<label
														className='custom-control-label'
														htmlFor=' customCheckLogin'
													>
														<span>Remember me</span>
													</label>
												</div>
												<div className='text-center'>
													<Button
														className='my-4'
														color='primary'
														type='button'
													>
														Sign in
													</Button>
												</div>
											</Form>
										</CardBody>
									</Card>
									<Row className='mt-3'>
										<Col xs='6'>
											<a
												className='text-light'
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												<small>Forgot password?</small>
											</a>
										</Col>
										<Col className='text-right' xs='6'>
											<a
												className='text-light'
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												<small>Create new account</small>
											</a>
										</Col>
									</Row>
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

export default Login
