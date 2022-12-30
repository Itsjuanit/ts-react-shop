import { createContext } from 'react'
import { User } from '../../types/user'
import { LoginType } from '../../pages/login/Login'
export interface ContextProps {
	user: User | null
	login: (loginData: LoginType) => Promise<void>
}
export const UserContext = createContext({} as ContextProps)
