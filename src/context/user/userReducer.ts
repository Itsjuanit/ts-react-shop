import { User } from '../../types/user'
import { UserState } from './UserProvider'
export type UserAction = {type: 'login', payload: User}
export const userReducer = (state: UserState, action: UserAction): UserState => {
	switch (action.type){
	case 'login':
		return{
			...state,
			user: action.payload
		}
	default:
		return state
	}
}