import { useEffect } from 'react'
import Approutes from './components/Approutes'
import Authroutes from './components/Authroutes'
import Notification from './components/Notification'
import Menu from './components/Menu'
import { setErrorNotification } from './reducers/notifReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { initializeBlogs } from './reducers/blogReducer'
import {
    initializeUser,
    setUserWhenLogin,
    setUserWhenLogout,
} from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'
import { Link } from 'react-router-dom'
import {
    GlobalFormStyle,
    GlobalButtonStyle,
    GlobalLinks,
    AppTitle,
} from './styles/StyledComponents'

const App = () => {
    const blogs = useSelector((state) => state.blogs)
    const user = useSelector((state) => state.users)
    const users = useSelector((state) => state.userslist)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //console.log('@App , user is =>', user)

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [blogs])

    useEffect(() => {
        dispatch(initializeUsers())
    }, [users])

    useEffect(() => {
        dispatch(initializeUser())
    }, [])

    const handleLogin = async (userInput) => {
        try {
            // USING AWAIT SO THE CATCH BLOCK EXECUTED IN CASE OF INCORRECT LOGIN DETAILS
            await dispatch(setUserWhenLogin(userInput))
        } catch (error) {
            console.log(error.message)
            dispatch(
                setErrorNotification({
                    text: 'wrong username or password',
                    error: true,
                }),
            )
        }
    }

    const handleLogOut = (event) => {
        event.preventDefault()
        dispatch(setUserWhenLogout())
        navigate('/')
    }

    return (
        <div className="container">
            <GlobalFormStyle />
            <GlobalButtonStyle />
            <GlobalLinks />
            {user === null ? (
                <div>
                    <AppTitle>BLOG APP</AppTitle>
                    <Notification />
                    <Authroutes login={handleLogin} />
                </div>
            ) : (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Menu Link={Link} />
                        <p style={{ marginLeft: '10px', marginTop: '10px' }}>
                            {user.name} logged in
                        </p>
                        <button onClick={handleLogOut}>Log Out</button>
                    </div>
                    <div>
                        <Notification />
                    </div>
                    <div>
                        <AppTitle>BLOG APP</AppTitle>
                    </div>
                    <Approutes blogs={blogs} users={users} viewer={user} />
                </div>
            )}
        </div>
    )
}

export default App
