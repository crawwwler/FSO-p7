import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { blogUpdating, blogComment } from '../reducers/blogReducer'

const Blogview = () => {
    const blogs = useSelector((state) => state.blogs)
    const id = useParams().id
    const blog = blogs.find((blog) => blog.id === id)
    const dispatch = useDispatch()
    const [cm, setCm] = useState('')

    const likeButtonFunc = (event) => {
        event.preventDefault()
        const nuBlog = { ...blog, likes: blog.likes + 1 }
        dispatch(blogUpdating(nuBlog, id))
    }

    const addCommentFunc = (event) => {
        event.preventDefault()
        if (cm) {
            dispatch(blogComment(cm, id))
            setCm('')
        }
    }

    return (
        <div>
            {blog ? (
                <div>
                    <h2>
                        {blog.title} {blog.author}
                    </h2>
                    <a href={blog.url}>{blog.url}</a>
                    <p>
                        likes {blog.likes}
                        <button onClick={likeButtonFunc}>Like</button>
                    </p>
                    added by{' '}
                    {blog.user.length === 0 ? 'not defined' : blog.user[0].name}
                    <div>
                        <h4>Comments</h4>
                        <form onSubmit={addCommentFunc}>
                            <input
                                id="comment"
                                value={cm}
                                onChange={({ target }) => setCm(target.value)}
                            />
                            <button type="submit">add comment</button>
                        </form>
                        <ul>
                            {blog.comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Blogview
