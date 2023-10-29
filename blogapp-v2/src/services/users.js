import axios from 'axios'
const baseUrl = '/api/users'

let token

const setToken = (tk) => {
    token = `Bearer ${tk}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

// sign up user
const createUser = async (obj) => {
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const deleteUser = async (id) => {
    console.log('@usersAxios token is =>', token)
    const config = {
        headers: { Authorization: token },
    }

    console.log('@usersAXIOS , =>', `${baseUrl}/${id}`)
    await axios.delete(`${baseUrl}/${id}`, config)
}

const services = { getAll, createUser, deleteUser, setToken }
export default services
