import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
	Button,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from 'reactstrap'
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
                <div className="d-flex justify-content-end ms-5 navbart">
                    <Link to='/'>Home</Link>
                    <Link to='/register'>About</Link>
                    <Link to='/register'>Contact</Link>
                </div>
			</nav>
			{/*<button className='nav-btn' onClick={showNavbar}>*/}
			{/*	<FaBars />*/}
			{/*</button>*/}


            <UncontrolledDropdown
    className="me-5"
    direction="down"
  >

    <DropdownToggle
      caret
      color="#3081D0"
	  me="5"
      className="drop"
    >
        Items
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem >
	  <Link to='/lost'>Lost</Link>
      </DropdownItem>
      <DropdownItem>
	  <Link to='/found'>Found</Link>
      </DropdownItem>

    </DropdownMenu>
  </UncontrolledDropdown>


			<UncontrolledDropdown
    className="me-5"
    direction="down"
  >
    <DropdownToggle
      caret
      color="#3081D0"
	  me="5"
      className="drop"
    >
      Sign up
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem >
	  <Link to='/register'>Register</Link>
      </DropdownItem>
      <DropdownItem>
	  <Link to='/login'>Login</Link>
      </DropdownItem>

    </DropdownMenu>
  </UncontrolledDropdown>


		</header>





	)

}

export default DemoNavbar
