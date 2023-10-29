import { Form, Button } from 'react-bootstrap'
import { useField } from '../hooks/custom'
import server from '../services/users'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification, setErrorNotification } from '../reducers/notifReducer'

const Signupform = () => {
    const username = useField('text', 'username', 'username')
    const name = useField('text', 'name', 'name')
    const password = useField('password', 'password', 'password')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signUp = async (event) => {
        event.preventDefault()
        console.log('code @Signupform/signUp component => first line first log')
        const nuUser = {
            username: username.value,
            name: name.value,
            password: password.value,
        }
        try {
            const cUser = await server.createUser(nuUser)
            console.log('code @Signupform/signup component / second log')
            dispatch(
                setNotification({
                    text: `your account has been created, ${cUser.name}`,
                    error: false,
                }),
            )
            name.clearField()
            username.clearField()
            password.clearField()
            navigate('/')
        } catch (error) {
            console.log(error.message)
            dispatch(
                setErrorNotification({
                    text: error.message,
                    error: true,
                }),
            )
        }
    }

    const backToLogin = () => {
        navigate('/')
    }

    return (
        <div>
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
