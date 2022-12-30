import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import React from 'react'
type ThemeProp = {
	children: JSX.Element
}
export enum themePalette {
	BG = '#212121',
	YELLOW = '#fff712',
}
const theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: themePalette.BG,
		},
		primary: {
			main: themePalette.YELLOW,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					textTransform: 'uppercase',
					boxShadow: 'none',
				},
			},
		},
		MuiInputAdornment: {
			defaultProps: {
				style: {
					color: themePalette.YELLOW,
				},
			},
		},
	},
})
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
