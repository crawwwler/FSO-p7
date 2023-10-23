import uniLogo from '../logo/UOH.png'

const Home = () => {
    return (
        <div style={{ marginTop: '10px' }}>
            <em>
                THIS IS A BLOGS APPLICATION, IMPLEMENTED AS AN EXERCISE FOR PART
                7 OF FULL STACK OPEN. THE FUNCTIONALITIES OFFERED BY THIS APP IS
                INCLUDED ADDING A BLOG, LIKING A BLOG, DELETING A BLOG AND
                LEAVING A COMMENT ABOUT A BLOG.
            </em>
            <div className="logo-image">
                <img src={uniLogo} alt="../logo/UOH.png" />
            </div>
        </div>
    )
}

export default Home
