import { createSlice } from '@reduxjs/toolkit'
import usersService from '../services/users'

const usersSlice = createSlice({
    name: 'userslist',
    initialState: [],
    reducers: {
        setUsersAction(state, action) {
            return action.payload
        },
    },
})

export const initializeUsers = () => {
    return async (dispatch) => {
        const users = await usersService.getAll()
        dispatch(setUsersAction(users))
    }
}

export const { setUsersAction } = usersSlice.actions
export default usersSlice.reducer
