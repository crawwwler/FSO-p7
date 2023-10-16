import { useEffect, useState } from "react"
import server from '../services/server'


export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        server
            .getAll(baseUrl)
            .then(data => setResources(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const create = (resource) => {
        server
            .createFunc(baseUrl, resource)
            .then(data => setResources(resources.concat(data)))
    }

    const service = {
        create
    }

    return [
        resources,
        service
    ]
}