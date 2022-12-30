import React, { useContext } from 'react'
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { UserContext } from '../../context/user/UserContext'

export type LoginType = {
	email: string
	password: string
}
export const Login: React.FC = () => {
	const [loginData, setLoginData] = React.useState<LoginType>({
		email: '',
		password: '',
	})
	const { login } = useContext(UserContext)
	const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(loginData)
		login(loginData)
		// const res = await api.post('/auth/login', loginData)
		// console.log(res)
	}
	const [showPassword, setShowPassword] = React.useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
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
								name="email"
								type="text"
								margin="normal"
								fullWidth
								label="Email"
								sx={{ mt: 2, mb: 1.5 }}
								onChange={dataLogin}
							/>
							<OutlinedInput
								name="password"
								fullWidth
								label="Contraseña"
								sx={{ mt: 1.5, mb: 1.5 }}
								onChange={dataLogin}
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 1.5, mb: 3 }}
							>
								INICIAR SESIÓN
							</Button>
							<RouterLink to="/register">
								¿No tenes cuenta? Registrate
							</RouterLink>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}
