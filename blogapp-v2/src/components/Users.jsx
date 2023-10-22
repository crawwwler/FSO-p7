import User from './User'
import { Table } from 'react-bootstrap'
const Users = ({ users }) => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h4>users</h4>
                <h4 style={{ marginLeft: '20px' }}>blogs created</h4>
            </div>
            <div>
                <Table striped bordered hover>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <User key={user.id} user={user} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Users
