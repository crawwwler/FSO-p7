import { useField, useResource } from './hooks/custom'

// 
const App = () => {
    const title = useField('text')
    const name = useField('text')
    const number = useField('text')

    // URL CHANGED TO SYNCHRONISE WITH BLOGAPP 
    // AND A FEW CHANGES INTO THE COMPONENT'S CODE e.g content => title
    const [notes, noteService] = useResource('http://localhost:3005/api/blogs')
    const [persons, personService] = useResource('http://localhost:3005/api/users')

    const handleNoteSubmit = (event) => {
        event.preventDefault()
        noteService.create({ title: title.value })
    }

    const handlePersonSubmit = (event) => {
        event.preventDefault()
        personService.create({ name: name.value, number: number.value })
    }

    return (
        <div>
            <h2>notes</h2>
            <form onSubmit={handleNoteSubmit}>
                <input {...title} />
                <button>create</button>
            </form>
            {notes.map(n => <p key={n.id}>{n.title}</p>)}

            <h2>persons</h2>
            <form onSubmit={handlePersonSubmit}>
                name <input {...name} /> <br />
                number <input {...number} />
                <button>create</button>
            </form>
            {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
        </div>
    )
}

export default App