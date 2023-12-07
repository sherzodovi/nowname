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
			<Button className='btn' color='primary' to='/register-page' id='Register'>
					<Link to='/register'>Home</Link>
				</Button>
				<Button color='success' className='btn'>
					<Link to='/login'>About</Link>
				</Button>
				<UncontrolledDropdown
    className="me-2"
    direction="down"
  >
    <DropdownToggle
      caret
      color="primary"
	  me=""
    >
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>
	  <Link to='/register'>Register</Link>
      </DropdownItem>
      <DropdownItem disabled>
	  <Link to='/login'>Lo</Link>
      </DropdownItem>
    
    </DropdownMenu>
  </UncontrolledDropdown>
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
      color="primary"
	  me=""
    >
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>
	  Register
      </DropdownItem>
      <DropdownItem disabled>
	  Login
      </DropdownItem>
    
    </DropdownMenu>
  </UncontrolledDropdown>
  


		</header>

		
	)
}

export default DemoNavbar
