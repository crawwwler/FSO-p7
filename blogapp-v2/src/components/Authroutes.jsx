import { Routes, Route } from 'react-router-dom'
import Loginform from './Loginform'
import Signupform from './Signupform'

const Authroutes = ({ login }) => {
    return (
        <Routes>
            <Route path="/" element={<Loginform loginFunc={login} />} />
            <Route path="signup" element={<Signupform />} />
        </Routes>
    )
}

export default Authroutes
