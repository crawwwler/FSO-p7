import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const server = { getAll }
export default server