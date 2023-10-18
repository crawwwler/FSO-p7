import Blog from './Blog'
import Togglable from './Togglable'
import Blogform from './Blogform'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {blogUpdating, blogDeletion, blogCreation} from '../reducers/blogReducer'
import { setNotification } from '../reducers/notifReducer'

const Blogs = ({blogs}) => {
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()
    const refBlogForm = useRef()


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

    const blogForm = () => {
        return (
            <Togglable buttonLabel='new note' ref={refBlogForm}>
                <Blogform createFunc={createBlog} />
            </Togglable>
        )
    }


    return(
        <div>
            {blogForm()}
            <div>
                {blogs.map(blog => 
                    <Blog key={blog.id}
                        blog={blog}
                        updateFunc={updateBlog}
                        deleteFunc={() => deleteBlog(blog.id)}
                        creator={user} />)}
            </div>
        </div>
    )
}

export default Blogs