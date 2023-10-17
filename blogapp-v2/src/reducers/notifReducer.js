import { createSlice } from "@reduxjs/toolkit"

const notifReducer = createSlice({
    name: 'notif',
    initialState: null,
    reducers: {
        setNotif(state, action){
            console.log('log in setNotif reducer => ', action.payload)
            return action.payload
        },
        setErrorNotif(state, action) {
            return action.payload
        }
    }
})

export const setNotification = (content) => {
    return dispatch => {
        console.log('log at setNotification AC =>', content)
        dispatch(setNotif(content))
        setTimeout(() => {
            dispatch(setNotif(null))
        }, 5000);
    }
}

export const setErrorNotification = (content) => {
    return dispatch => {
        dispatch(setErrorNotif(content))
        setTimeout(() => {
            dispatch(setErrorNotif(null))
        }, 5000);
    }
}


export const {setNotif, setErrorNotif} = notifReducer.actions
export default notifReducer.reducer