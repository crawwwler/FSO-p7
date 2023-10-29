import { createSlice } from '@reduxjs/toolkit'
import usersService from '../services/users'

const usersSlice = createSlice({
    name: 'userslist',
    initialState: [],
    reducers: {
        setUsersAction(state, action) {
            return action.payload
        },
        createNewUserAction(state, action) {
            state.push(action.payload)
        },
        removeUserAction(state, action) {
            return state.filter((m) => m.id !== action.payload)
        },
    },
})

export const initializeUsers = () => {
    return async (dispatch) => {
        const users = await usersService.getAll()
        dispatch(setUsersAction(users))
    }
}

export const createNewUser = (nuUser) => {
    return async (dispatch) => {
        const createdUser = await usersService.createUser(nuUser)
        dispatch(createNewUserAction(createdUser))
    }
}

export const removeUser = (id) => {
    return async (dispatch) => {
        await usersService.deleteUser(id)
        dispatch(removeUserAction(id))
    }
}

export const { setUsersAction, createNewUserAction, removeUserAction } =
    usersSlice.actions
export default usersSlice.reducer
