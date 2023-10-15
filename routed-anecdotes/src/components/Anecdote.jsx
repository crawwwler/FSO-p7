import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'

const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    const foundAnec = anecdotes.find(anec => anec.id === Number(id))
    //console.log('anecdote is =>', foundAnec)
    return (
        <div>
            <h2>{foundAnec.content}<br /></h2>
            <em>has {foundAnec.votes} votes</em>
            <br />
            <em>for more info see <a href={foundAnec.info}>{foundAnec.info}</a></em>
        </div>
    )
}

Anecdote.propTypes = {
    anecdotes: PropTypes.array.isRequired
}

export default Anecdote