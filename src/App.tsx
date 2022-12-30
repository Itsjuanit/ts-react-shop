import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { UserProvider } from './context/user/UserProvider'
function App() {
	return (
		<div>
			<UserProvider>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</UserProvider>
		</div>
	)
}

export default App
