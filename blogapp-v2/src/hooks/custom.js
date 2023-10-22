import { useState } from 'react'

export const useField = (type, id, placeholder) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const clearField = () => {
        setValue('')
    }

    return {
        type,
        id,
        placeholder,
        value,
        onChange,
        clearField,
    }
}
