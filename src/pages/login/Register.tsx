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
import api from '../../api/api'

type RegisterType = {
	name: string
	lastName: string
	email: string
	password: string
}

export const Register: React.FC = () => {
	const [registerData, setRegisterData] = React.useState<RegisterType>({
		name: '',
		lastName: '',
		email: '',
		password: '',
	})
	const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({
			...registerData,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		const body = {
			nombre: registerData.name,
			apellido: registerData.lastName,
			email: registerData.email,
			password: registerData.password,
		}
		const res = await api.post('/users', body)
		console.log(res)
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
							REGISTRATE
						</Typography>
						<Box component="form" onSubmit={handleSubmit}>
							<TextField
								name="name"
								type="text"
								margin="normal"
								label="Nombre"
								sx={{ mt: 2, mb: 1.5, mr: 1 }}
								required
								onChange={dataRegister}
							/>
							<TextField
								name="lastName"
								type="text"
								margin="normal"
								label="Apellido"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataRegister}
							/>
							<TextField
								name="email"
								type="text"
								margin="normal"
								label="Email"
								sx={{ mt: 2, mb: 1.5, mr: 1 }}
								required
								onChange={dataRegister}
							/>
							<TextField
								name="password"
								type="password"
								margin="normal"
								label="Contraseña"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataRegister}
							/>
							<Button type="submit" fullWidth sx={{ mt: 1.5, mb: 3 }}>
								REGISTRATE
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}
