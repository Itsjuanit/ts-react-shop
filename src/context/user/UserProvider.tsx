import { useReducer } from 'react'
import { User } from '../../types/user'
import { UserContext } from './UserContext'
import { userReducer } from './userReducer'
import api from '../../api/api'
import { LoginType } from '../../pages/login/Login'

export interface Props {
	children: React.ReactNode
}
export interface UserState {
	user: User | null
}
const initialState: UserState = { user: null }
export const UserProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(userReducer, initialState)
	const login = async (loginData: LoginType) => {
		const res = await api.post('/auth/login', loginData)
		dispatch({
			type: 'login',
			payload: res.data.user,
		})
	}
	return (
		<UserContext.Provider value={{ ...state, login }}>
			{children}
		</UserContext.Provider>
	)
}
