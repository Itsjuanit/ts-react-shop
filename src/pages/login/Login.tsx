import React from 'react'
import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material'

type LoginType = {
	username: string
	password: string
}
export const Login: React.FC = () => {
	const [loginData, setLoginData] = React.useState<LoginType>({
		username: '',
		password: '',
	})
	const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(loginData)
	}
	return (
		<Container maxWidth="sm">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh' }}
			>
				<Grid item>
					<Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
						<Typography variant="h4" sx={{ mt: 1, mb: 1.5 }}>
							INICIAR SESIÓN
						</Typography>
						<Box component="form" onSubmit={handleSubmit}>
							<TextField
								name="username"
								type="text"
								margin="normal"
								fullWidth
								label="Email"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataLogin}
							/>
							<TextField
								name="password"
								type="password"
								margin="normal"
								fullWidth
								label="Contraseña"
								sx={{ mt: 1.5, mb: 1.5 }}
								required
								onChange={dataLogin}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 1.5, mb: 3 }}
							>
								INICIAR SESIÓN
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}
