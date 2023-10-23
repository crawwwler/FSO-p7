import Togglable from './Togglable'
import Blog from './Blog'
import Blogform from './Blogform'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    blogUpdating,
    blogDeletion,
    blogCreation,
} from '../reducers/blogReducer'
import { setNotification } from '../reducers/notifReducer'
import { Table } from 'react-bootstrap'

const Blogs = ({ blogs }) => {
    const user = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const refBlogForm = useRef()

    // RESPONSIBLE FOR CREATING A NEW BLOG
    // RECIEVES DETAILS FOR NEW BLOG AND CALL ACTION FOR COMMUNICATING WITH SERVER
    // TO CREATE A BLOG (MAKING HTTP REQ)
    const createBlog = async (blogForm) => {
        try {
            dispatch(blogCreation(blogForm))
            dispatch(
                setNotification({
                    text: `a new blog ${blogForm.title} by ${blogForm.author} added`,
                    error: false,
                }),
            )
        } catch (error) {
            console.log(error.message)
        }
        refBlogForm.current.toggleTheVisibility()
    }

    // THIS FUNC RECIEVES UPDATED BLOG AND IT'S ID AND CALL ACTION TO COMMUNICATE SERVER TO UPDATE BLOG
    const updateBlog = async (obj, id) => {
        dispatch(blogUpdating(obj, id))
    }

    // RECIVES ID OF THE BLOG WE WANT TO DELETE AND CALL ACTION RESPONSIBLE FOR
    // MAKING HTTP REQUEST
    const deleteBlog = async (id) => {
        const blog = blogs.find((blog) => blog.id === id)
        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            dispatch(blogDeletion(id))
        }
    }

    const blogForm = () => {
        return (
            <Togglable buttonLabel="new blog" ref={refBlogForm}>
                <Blogform createFunc={createBlog} />
            </Togglable>
        )
    }

    return (
        <div>
            {blogForm()}
            <Table striped bordered>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>
                                <Blog
                                    key={blog.id}
                                    blog={blog}
                                    updateFunc={updateBlog}
                                    deleteFunc={() => deleteBlog(blog.id)}
                                    creator={user}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Blogs
