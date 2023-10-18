import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import loginService from '../services/login'

const userSlice = createSlice({
    name: 'users',
    initialState: null,
    reducers: {
        setUserAction(state, action) {
            return action.payload
        },
    },
})

export const initializeUser = () => {
    return (dispatch) => {
        const existingUser = window.localStorage.getItem('loggedUser')
        if (existingUser) {
            const userObj = JSON.parse(existingUser)
            dispatch(setUserAction(userObj))
            blogService.setToken(userObj.token)
        }
    }
}

export const setUserWhenLogin = (loginDetail) => {
    return async (dispatch) => {
        const userLoggedIn = await loginService.login(loginDetail)
        window.localStorage.setItem('loggedUser', JSON.stringify(userLoggedIn))
        dispatch(setUserAction(userLoggedIn))
        blogService.setToken(userLoggedIn.token)
    }
}

export const setUserWhenLogout = () => {
    return (dispatch) => {
        dispatch(setUserAction(null))
        blogService.setToken('')
        window.localStorage.removeItem('loggedUser')
    }
}

export const { setUserAction } = userSlice.actions

export default userSlice.reducer
