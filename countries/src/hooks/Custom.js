import { useState, useEffect } from "react"
import server from '../services/server'

// HOOK RESPONSIBLE HANDLING THE INPUT OF FORM
export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

// HOOK FOR RETREIVING COUNTRY DATA
export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
    useEffect(() => {
        if (name !== '') {
            server
                .getAll()
                .then(response => {
                    const foundCt = response.find(ct => ct.name.common.toLowerCase().includes(name.toLowerCase()))
                    if (foundCt) {
                        setCountry({ ...foundCt, found: true })
                    } else {
                        setCountry({ found: false })
                    }
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])
    return country
}