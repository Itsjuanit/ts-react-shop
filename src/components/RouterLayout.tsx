import { Outlet } from '@mui/icons-material'
import { NavBar } from './NavBar'
import React from 'react'

export const RouterLayout: React.FC = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	)
}
