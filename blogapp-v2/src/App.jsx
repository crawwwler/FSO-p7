import { useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Loginform from './components/Loginform'
import Blogform from './components/Blogform'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { setNotification, setErrorNotification } from './reducers/notifReducer'
import { useDispatch, useSelector } from 'react-redux'
import {blogCreation, initializeBlogs, blogDeletion, blogUpdating} from './reducers/blogReducer'
import {initializeUser, setUserWhenLogin, setUserWhenLogout} from './reducers/userReducer'

const App = () => {

    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()

    const refBlogForm = useRef()


    useEffect(() => {
        dispatch(initializeBlogs())
    }, [blogs])


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
            dispatch(setErrorNotification({
                text: 'wrong username or password',
                error: true
            }))
        }
    }

    const handleLogOut = (event) => {
        event.preventDefault()
        dispatch(setUserWhenLogout())
    }

    const createBlog = async (blogForm) => {
        try {
            dispatch(blogCreation(blogForm))
            dispatch(setNotification({
                text: `a new blog ${blogForm.title} by ${blogForm.author} added`,
                error: false
            }))
        } catch (error) {
            console.log(error.message)
        }
        refBlogForm.current.toggleTheVisibility()
    }


    const updateBlog = async (obj, id) => {
        dispatch(blogUpdating(obj, id))
    }


    const deleteBlog = async (id) => {
        const blog = blogs.find(blog => blog.id === id)
        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            dispatch(blogDeletion(id))
        }
    }


    const loginForm = () => {
        return (
            <Loginform loginFunc={handleLogin} />
        )
    }


    const blogForm = () => {
        return (
            <Togglable buttonLabel='new note' ref={refBlogForm}>
                <Blogform createFunc={createBlog} />
            </Togglable>
        )
    }

    if (user === null) {
        return (
            <div>
                <h2>log in to application</h2>
                <Notification/>
                {loginForm()}
            </div>
        )
    }


    return (
        <div>
            <h2>blogs</h2>
            <Notification />
            {user && <div>
                <p>{user.name} logged in</p>
                <button onClick={handleLogOut}>Logout</button>
                {blogForm()}
            </div>}
            <div>
                {blogs.map(blog =>
                    <Blog key={blog.id}
                        blog={blog}
                        updateFunc={updateBlog}
                        deleteFunc={() => deleteBlog(blog.id)}
                        creator={user} />
                )}
            </div>
            <br />
        </div>
    )
}

export default App