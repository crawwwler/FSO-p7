import User from './User'
const Users = ({users}) => {
    
    //console.log(users)

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h4>users</h4>
                <h4 style={{marginLeft: '20px'}}>blogs created</h4>
            </div>
                <div>
                    {users.map(user => 
                        <User key={user.id}
                        user={user} />)}
                </div>
        </div>
    )

}

export default Users