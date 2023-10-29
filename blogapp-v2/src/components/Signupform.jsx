import { Form, Button } from 'react-bootstrap'
import { useField } from '../hooks/custom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification, setErrorNotification } from '../reducers/notifReducer'
import { createNewUser } from '../reducers/usersReducer'

const Signupform = () => {
    const username = useField('text', 'username', 'username')
    const name = useField('text', 'name', 'name')
    const password = useField('password', 'password', 'password')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signUp = async (event) => {
        event.preventDefault()
        const nuUser = {
            username: username.value,
            name: name.value,
            password: password.value,
        }
        try {
            await dispatch(createNewUser(nuUser))
            dispatch(
                setNotification({
                    text: `your account has been created, ${nuUser.name}`,
                    error: false,
                }),
            )
            name.clearField()
            username.clearField()
            password.clearField()
            navigate('/')
        } catch (error) {
            if (error.response.status === 400) {
                dispatch(
                    setErrorNotification({
                        text: error.response.data.error,
                        error: true,
                    }),
                )
            } else {
                dispatch(
                    setErrorNotification({
                        text: 'something went wrong',
                        error: true,
                    }),
                )
            }
        }
    }

    const backToLogin = () => {
        navigate('/')
    }

    return (
        <div style={{ marginTop: '15px' }}>
            <h4>Fill the form to sign up</h4>
            <Form onSubmit={signUp}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type={name.type}
                        id={name.id}
                        placeholder={name.placeholder}
                        value={name.value}
                        onChange={name.onChange}
                    />
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type={username.type}
                        id={username.id}
                        placeholder={username.placeholder}
                        value={username.value}
                        onChange={username.onChange}
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={password.type}
                        id={password.id}
                        placeholder={password.placeholder}
                        value={password.value}
                        onChange={password.onChange}
                    />
                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form.Group>
            </Form>
            <Button
                variant="primary"
                onClick={backToLogin}
                style={{ marginTop: '10px' }}
            >
                back to login
            </Button>
        </div>
    )
}

export default Signupform
