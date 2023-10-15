import { useState } from 'react'
import { useField, useCountry } from './hooks/Custom'
import Country from './components/Country'

const App = () => {
    const nameInput = useField('text')
    const [name, setName] = useState('')
    const country = useCountry(name)

    // FETCH FUNC CALLED WHEN PRESSING FIND BUTTON
    const fetch = (e) => {
        e.preventDefault()
        setName(nameInput.value)
    }

    return (
        <div>
            <form onSubmit={fetch}>
                <input type='text' value={nameInput.value} onChange={nameInput.onChange} />
                <button type='submit'>find</button>
            </form>
            <Country country={country} />
        </div>
    )
}

export default App