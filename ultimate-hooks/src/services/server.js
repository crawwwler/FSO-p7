import axios from "axios"

const getAll = async (baseUrl) => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createFunc = async (baseUrl, nuObj) => {
    const response = await axios.post(baseUrl, nuObj)
    return response.data
}


export default { getAll, createFunc }