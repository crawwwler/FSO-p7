import {useSelector} from 'react-redux'

const Notification = () => {
    const message = useSelector(state => state.notif)

    if (message === null) {
        return null
    }

    if (message.error) {
        return (
            <div className="error">
                {message.text}
            </div>
        )
    } else {
        return (
            <div className="notif">
                {message.text}
            </div>
        )
    }
}

export default Notification