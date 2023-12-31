import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        createBlogAction(state, action) {
            state.push(action.payload)
        },
        setBlogsAction(state, action) {
            return action.payload
        },
        deleteBlogAction(state, action) {
            return state.filter((x) => x.id !== action.payload)
        },
        updateBlogAction(state, action) {
            return state.map((x) =>
                x.id !== action.payload.id ? x : action.payload,
            )
        },
        addCommentAction(state, action) {
            const blog = state.find((b) => b.id === action.payload.id)
            blog.comments.push(action.payload.comment)
        },
    },
})

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogsFromDB = await blogService.getAll()
        const sortedBlogs = blogsFromDB.sort((a, b) => b.likes - a.likes)
        dispatch(setBlogsAction(sortedBlogs))
    }
}

export const blogCreation = (blog) => {
    return async (dispacth) => {
        const blogCreated = await blogService.create(blog)
        dispacth(createBlogAction(blogCreated))
    }
}

export const blogDeletion = (id) => {
    return async (dispatch) => {
        await blogService.remove(id)
        dispatch(deleteBlogAction(id))
    }
}

export const blogUpdating = (obj, id) => {
    return async (dispatch) => {
        const response = await blogService.update(obj, id)
        dispatch(updateBlogAction(response))
    }
}

export const blogComment = (cm, id) => {
    return async (dispatch) => {
        const response = await blogService.addComment(cm, id)
        const data = { id: id, comment: response }
        dispatch(addCommentAction(data))
    }
}

export const {
    createBlogAction,
    setBlogsAction,
    deleteBlogAction,
    updateBlogAction,
    addCommentAction,
} = blogSlice.actions
export default blogSlice.reducer
