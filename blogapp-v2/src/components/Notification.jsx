import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
    const message = useSelector((state) => state.notif)

    if (message === null) {
        return null
    }

    if (message.error) {
        return <Alert variant="danger">{message.text}</Alert>
    } else {
        return <Alert variant="success">{message.text}</Alert>
    }
}

export default Notification
