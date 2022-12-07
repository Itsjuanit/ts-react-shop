import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import { RouterLayout } from './components/RouterLayout'
import { Error404 } from './pages/error/Error404'
import { Home } from './pages/home'
import { Login } from './pages/login/Login'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Error404 />} />
		</Routes>
	)
}
