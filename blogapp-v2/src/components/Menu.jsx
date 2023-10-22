import { Navbar, Nav } from 'react-bootstrap'

const Menu = ({ Link }) => {
    const padding = {
        padding: '5px 10px',
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="blogs">
                            Blogs
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="users">
                            Users
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu
