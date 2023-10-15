import PropTypes from 'prop-types'

const Menu = ({ Link }) => {
    const padding = {
        paddingRight: 5
    }
    return (
        <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="create">create new</Link>
            <Link style={padding} to="about">about</Link>
        </div>

    )
}

Menu.propTypes = {
    Link: PropTypes.elementType.isRequired
}

export default Menu



