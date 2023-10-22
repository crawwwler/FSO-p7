import { useEffect } from 'react'
import Blogs from './components/Blogs'
import Users from './components/Users'
import Loginform from './components/Loginform'
import Notification from './components/Notification'
import Menu from './components/Menu'
import Home from './components/Home'
import Userview from './components/Userview'
import Blogview from './components/Blogview'
import { setErrorNotification } from './reducers/notifReducer'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import {
    initializeUser,
    setUserWhenLogin,
    setUserWhenLogout,
} from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {
    GlobalFormStyle,
    GlobalButtonStyle,
    GlobalLinks,
} from './styles/StyledComponents'

const App = () => {
    const blogs = useSelector((state) => state.blogs)
    const user = useSelector((state) => state.users)
    const users = useSelector((state) => state.userslist)
    const dispatch = useDispatch()

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
            console.log('the code was here at some point')
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
    }

    const loginForm = () => {
        return <Loginform loginFunc={handleLogin} />
    }

    if (user === null) {
        return (
            <div>
                <h2>log in to application</h2>
                <Notification />
                {loginForm()}
            </div>
        )
    }

    // SOME OF STYLES TEMPORARY FOR NOW
    return (
        <div className="container">
            <GlobalFormStyle />
            <GlobalButtonStyle />
            <GlobalLinks />
            <Router>
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
                    <h2>BLOGS APP</h2>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="blogs" element={<Blogs blogs={blogs} />} />
                    <Route path="users" element={<Users users={users} />} />
                    <Route
                        path="users/:id"
                        element={<Userview users={users} />}
                    />
                    <Route path="blogs/:id" element={<Blogview />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
