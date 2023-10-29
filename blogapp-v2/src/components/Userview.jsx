import { useParams } from 'react-router-dom'
import { removeUser } from '../reducers/usersReducer'
import { setUserWhenLogout } from '../reducers/userReducer'
import { setNotification } from '../reducers/notifReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Userview = ({ users, viewer }) => {
    const id = useParams().id
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // MY BACKEND RETURNS ID AS STRING
    const userToDisplay = users.find((user) => user.id === id)
    if (!userToDisplay) {
        return null
    }

    const removeAccount = async (event) => {
        console.log('@Userview removeAcc func , id is =>', userToDisplay.id)
        event.preventDefault()
        dispatch(removeUser(userToDisplay.id))
        dispatch(
            setNotification({
                text: 'Your account is deleted, sad to see you go! xd',
                error: false,
            }),
        )
        dispatch(setUserWhenLogout())
        navigate('/')
    }

    return (
        <div>
            <h2>{userToDisplay.name}</h2>
            <h4 style={{ marginLeft: '5px' }}>added blogs</h4>
            <ul>
                {userToDisplay.blogs.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
            {viewer.username === userToDisplay.username && (
                <button onClick={removeAccount}>Delete Account</button>
            )}
        </div>
    )
}

export default Userview
