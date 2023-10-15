import { useField } from '../hooks/index'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        navigate('/')
        props.setNotif(`new anecdote ${content.value} created!`)
        setTimeout(() => {
            props.setNotif(null)
        }, 5000)
    }

    const resetFunc = () => {
        content.clearFunc()
        author.clearFunc()
        info.clearFunc()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input type='text' value={content.value} onChange={content.onChange} />
                </div>
                <div>
                    author
                    <input type='text' value={author.value} onChange={author.onChange} />
                </div>
                <div>
                    url for more info
                    <input type='text' value={info.value} onChange={info.onChange} />
                </div>
                <button type="submit">create</button>
            </form>
            <button onClick={resetFunc}>reset</button>
        </div>
    )

}


CreateNew.propTypes = {
    addNew: PropTypes.func.isRequired,
    setNotif: PropTypes.func.isRequired
}

export default CreateNew