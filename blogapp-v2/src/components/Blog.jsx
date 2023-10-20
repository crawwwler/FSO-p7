import { useState} from 'react'
import {Link} from 'react-router-dom'

const Blog = ({blog,updateFunc,deleteFunc,creator}) => {
    const [complete, setComplete] = useState(false)

    const toggleComplete = () => {
        setComplete(!complete)
    }

    const deleteButton = () => {
        if (blog.user.length === 0) {
            return null
        } else {
            return (
                <div>
                    {creator.username === blog.user[0].username && (
                        <div>
                            <button id="delbut" onClick={deleteFunc}>
                                remove
                            </button>
                        </div>
                    )}
                </div>
            )
        }
    }

    // FUNCTION WHICH HANDLE THE LIKE BUTTON
    const handleUpdating = () => {
        const id = blog.id
        const nuBlog = { ...blog, likes: blog.likes + 1 }
        updateFunc(nuBlog, id)
    }



    const fullDetail = () => {
        return (
            <div>
                <Link to={`${blog.id}`} >{blog.title} by {blog.author}</Link>
                <button onClick={toggleComplete}>hide</button>
                <br />
                <a href={blog.url}>{blog.url}</a>
                <br />
                likes {blog.likes}
                <button id="likebut" onClick={() => handleUpdating(blog)}>
                    like
                </button>
                <br />
                {blog.user.length === 0
                    ? 'name is not defined'
                    : blog.user[0].name}
                <br />
                {deleteButton()}
            </div>
        )
    }

    const summaryBlog = () => {
        return (
            <div>
                <Link to={`${blog.id}`}>{blog.title} by {blog.author}</Link>
                <button onClick={toggleComplete}>show</button>
            </div>
        )
    }

    return (
        <div>
            <div className="blog">
                {complete ? fullDetail() : summaryBlog()}
            </div>
            <br />
        </div>
    )
}


export default Blog
