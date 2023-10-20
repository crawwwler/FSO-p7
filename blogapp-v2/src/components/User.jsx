import {Link} from 'react-router-dom'
const User = ({user}) => {


    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to={`${user.id}`}>{user.name}</Link>
                <p style={{marginLeft: '30px'}}>{user.blogs.length}</p>
            </div>
        </div>
    )
}

export default User