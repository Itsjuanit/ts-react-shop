import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

export const Error404 = () => {
	const navigation = useNavigate()
	const handleClick = () => {
		navigation('/')
	}
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}
		>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Typography variant="h1">404</Typography>
						<Typography variant="h6">
							La página que buscabas no existe
						</Typography>
						<Button variant="contained" onClick={handleClick}>
							Inicio
						</Button>
					</Grid>
					<Grid xs={6}>
						<img
							src="https://i.ibb.co/KyrFWWL/error404.png"
							alt=""
							width={300}
							height={300}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
