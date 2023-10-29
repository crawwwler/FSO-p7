import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Userview from './Userview'
import Blogs from './Blogs'
import Blogview from './Blogview'

const Approutes = ({ blogs, users, viewer }) => {
    //console.log('@Approutes , viewer is =>', viewer)
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs blogs={blogs} />} />
            <Route path="users" element={<Users users={users} />} />
            <Route
                path="users/:id"
                element={<Userview users={users} viewer={viewer} />}
            />
            <Route path="blogs/:id" element={<Blogview />} />
        </Routes>
    )
}

export default Approutes
