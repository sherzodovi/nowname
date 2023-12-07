import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// mrv vvd
import 'assets/scss/argon-design-system-react.scss?v1.1.0'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import 'assets/vendor/nucleo/css/nucleo.css'

import Lost from 'components/lost'
import Index from 'views/Index.js'
import Landing from 'views/examples/Landing.js'
import Login from 'views/examples/Login'
import Profile from 'views/examples/Profile.js'
import Register from 'views/examples/Register.js'
import UserPage from "./views/examples/UserPage";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' exact element={<Index />} />
			<Route path='/landing-page' exact element={<Landing />} />
			<Route path='/login-page' exact element={<Login />} />
			<Route path='/profile-page' exact element={<Profile />} />
			<Route path='/register-page' exact element={<Register />} />
			<Route path='/user-page' exact element={<UserPage />} />
			<Route path='*' element={<Navigate to='/' replace />} />
			<Route path='/Lost' exact element={<Lost />} />
			<Route path='/register' exact element={<Register />} />
			<Route path='/login' exact element={<Login />} />
		</Routes>
	</BrowserRouter>
)
