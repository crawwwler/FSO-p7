import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { blogUpdating } from "../reducers/blogReducer"

const Blogview = () => {
    const blogs = useSelector(state => state.blogs)
    const id = useParams().id
    const blog = blogs.find(blog=> blog.id === id)
    const dispatch = useDispatch()

    const likeButtonFunc = (event) => {
        event.preventDefault()
        const id = blog.id
        const nuBlog = {...blog, likes: blog.likes + 1}
        dispatch(blogUpdating(nuBlog, id))
    }

    return(
        <div>
            <h2>{blog.title} {blog.author}</h2>
            <a href={blog.url}>{blog.url}</a>
            <p>likes {blog.likes} 
            <button onClick={likeButtonFunc}>Like</button>
            </p>
            added by {blog.user.length === 0 ? 'not defined' : blog.user[0].name}
        </div>
    )
}


export default Blogview