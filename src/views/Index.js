import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js'
import Category from 'components/lost/category/category'
import Hero from './IndexSections/Hero.js'
import Footer from './IndexSections/footer/footer'

class Index extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		// this.refs.main.scrollTop = 0;
	}
	render() {
		return (
			<>
				<DemoNavbar />
				<main ref='main'>
					<Hero />
					{/* <Buttons />
          <Inputs /> */}
					<section className='section'>
						<Container>
							{/* <CustomControls />
              <Menus /> */}
						</Container>
					</section>
					{/* <Navbars /> */}
					<section className='section section-components'>
						<Container>
							<Category />
							{/* <Tabs /> */}
							{/* <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover /> */}
						</Container>
						{/* <Login /> */}
					</section>
					{/* <Carousel />
          <Icons />
          <Login />
          <Download /> */}
				</main>
				<Footer />
			</>
		)
	}
}

export default Index
