// eslint-disable-next-line react/prop-types
const Notification = ({ notif }) => {

    const notifStyle = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '10px'
    }

    return (
        <div style={notifStyle}>
            {notif}
        </div>
    )
}



export default Notification