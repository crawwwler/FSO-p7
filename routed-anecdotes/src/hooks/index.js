import { useState } from "react";

export const useField = (type) => {
    const [value, setValue] = useState('')

    // CONTROLLING THE INPUT VALUE
    const onChange = (event) => {
        setValue(event.target.value)
    }

    // RESETING THE FIELD
    const clearFunc = () => {
        setValue('')
    }

    return {
        type,
        onChange,
        value,
        clearFunc
    }
}