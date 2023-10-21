import { useParams } from "react-router-dom"

const Userview = ({users}) => {
    const id = useParams().id

    // MY BACKEND RETURNS ID AS STRING
    const userToDisplay = users.find(user => user.id === id) 
    //console.log('userview comp , found user => ', userToDisplay)
    if(!userToDisplay){
        return null
    }

    return(
        <div>
            <h2>{userToDisplay.name}</h2>
            <h4 style={{marginLeft: '5px'}}>added blogs</h4>
            <ul>
                {userToDisplay.blogs.map(blog => 
                    <li key={blog.id}>
                        {blog.title}
                    </li>)}
            </ul>
        </div>
    )
}


export default Userview