import {useField} from '../hooks/custom'

const Loginform = ({ loginFunc }) => {
    const username = useField('text', 'username', 'username')
    const password = useField('password', 'password', 'password')

    const handleLogin = (event) => {
        event.preventDefault()
        loginFunc({
            username: username.value,
            password: password.value,
        })
        username.clearField()
        password.clearField()
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                username
                <input type={username.type}
                        id={username.id}
                        placeholder={username.placeholder}
                        value={username.value}
                        onChange={username.onChange}/>
            </div>
            <div>
                password
                <input type={password.type}
                        id={password.id}
                        placeholder={password.placeholder}
                        value={password.value}
                        onChange={password.onChange}/>
            </div>
            <button id="subbutton" type="submit">
                Login
            </button>
        </form>
    )
}

export default Loginform
