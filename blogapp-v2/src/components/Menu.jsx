const Menu = ({Link}) => {

    const padding = {
        padding: '2px 6px',
        textDecoration: 'none',
        backgroundColor: '#006600',
        color: 'white',
        borderRadius: '8px',
        transition: 'background-color 0.2s'
    }

    return(
        <div>
            <Link style={padding} to='/'>Blogs</Link>
            <Link style={padding} to='users'>Users</Link>
        </div>
    )
}

export default Menu