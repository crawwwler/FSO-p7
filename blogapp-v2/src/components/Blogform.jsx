import { useField } from '../hooks/custom'

const Blogform = ({ createFunc }) => {
    const title = useField('text', 'title', 'title')
    const url = useField('text', 'url', 'url')
    const author = useField('text', 'author', 'author')

    const handleForm = (event) => {
        event.preventDefault()
        createFunc({
            title: title.value,
            author: author.value,
            url: url.value,
        })
        title.clearField()
        author.clearField()
        url.clearField()
    }

    return (
        <div>
            <h3>create note</h3>
            <form onSubmit={handleForm}>
                <div>
                    title:
                    <input
                        type={title.type}
                        id={title.id}
                        placeholder={title.placeholder}
                        value={title.value}
                        onChange={title.onChange}
                    />
                </div>
                <div>
                    author:
                    <input
                        type={author.type}
                        id={author.id}
                        placeholder={author.placeholder}
                        value={author.value}
                        onChange={author.onChange}
                    />
                </div>
                <div>
                    url:
                    <input
                        type={url.type}
                        id={url.id}
                        placeholder={url.placeholder}
                        value={url.value}
                        onChange={url.onChange}
                    />
                </div>
                <button id="subbutton" type="submit">
                    create
                </button>
            </form>
        </div>
    )
}

export default Blogform
