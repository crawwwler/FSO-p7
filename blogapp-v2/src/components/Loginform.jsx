import { useField } from '../hooks/custom'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Loginform = ({ loginFunc }) => {
    const username = useField('text', 'username', 'username')
    const password = useField('password', 'password', 'password')
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        loginFunc({
            username: username.value,
            password: password.value,
        })
        username.clearField()
        password.clearField()
    }

    const signUpButton = () => {
        navigate('signup')
    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type={username.type}
                        id={username.id}
                        placeholder={username.placeholder}
                        value={username.value}
                        onChange={username.onChange}
                    />
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type={password.type}
                        id={password.id}
                        placeholder={password.placeholder}
                        value={password.value}
                        onChange={password.onChange}
                    />
                    <Button id="subbutton" variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group>
            </Form>
            <Button
                variant="primary"
                onClick={signUpButton}
                style={{ marginTop: '10px' }}
            >
                SignUp
            </Button>
        </div>
    )
}

export default Loginform
