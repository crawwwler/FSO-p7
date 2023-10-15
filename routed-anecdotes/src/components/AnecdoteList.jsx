import PropTypes from 'prop-types'
const AnecdoteList = ({ anecdotes, Link }) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes.map(anecdote => <li key={anecdote.id} >
                    <Link to={`anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </li>)}
            </ul>
        </div>
    )
}

AnecdoteList.propTypes = {
    anecdotes: PropTypes.array.isRequired,
    Link: PropTypes.elementType.isRequired
}

export default AnecdoteList