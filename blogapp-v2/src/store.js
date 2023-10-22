import { configureStore } from '@reduxjs/toolkit'
import notifReducer from './reducers/notifReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
    reducer: {
        notif: notifReducer,
        blogs: blogReducer,
        users: userReducer,
        userslist: usersReducer,
    },
})

export default store
