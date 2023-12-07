import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import img from '../../assets/img/img/output-onlinepngtools (3).png'
import './DemoNavbar.css'


function DemoNavbar() {
	const navRef = useRef()

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav')
	}

	return (
		<header className='head'>
			<img src={img} alt='' className='img' />
			<nav ref={navRef}>
				
				<button className='nav-btn  nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
			

			<UncontrolledDropdown
    className="me-2"
    direction="down"
  >
    <DropdownToggle
      caret
      color="primary" >
      sing up
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem divider />
	  <DropdownItem>
	  <Link to='/register'>Register</Link>
      </DropdownItem>
	  <DropdownItem>
	  <Link to='/register'>Login</Link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  


		</header>

		
	)
}

export default DemoNavbar
