import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

// sign up user
const createUser = async(obj) => {
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const services = { getAll, createUser}
export default services
