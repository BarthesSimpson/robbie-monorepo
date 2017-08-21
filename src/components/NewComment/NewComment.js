import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//------- COMPONENTS
import YesNoDialog from '../Dialogs/YesNoDialog'

//------- STYLING
import './NewComment.css'

class NewComment extends React.Component {
    componentDidMount() {
        this.textInput.focus()
        ReactDOM.findDOMNode(this.textInput).scrollIntoView({
            block: 'end',
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <div className="NewComment Comment">
                <input
                    value={this.props.author}
                    placeholder="Your Name"
                    className="new-comment-name"
                    onChange={e =>
                        this.props.editNewComment('author', e.target.value)}
                    ref={input => {
                        this.textInput = input
                    }}
                />
                <textarea
                    value={this.props.content}
                    placeholder="Write your comment here..."
                    className="new-comment-content"
                    onChange={e =>
                        this.props.editNewComment('content', e.target.value)}
                />
                <YesNoDialog
                    confirmText="Save"
                    _onConfirm={() =>
                        this.props.createNewComment(
                            this.props.author,
                            this.props.parentId,
                            this.props.content
                        )}
                    _onCancel={() => this.props.cancelComment()}
                />
            </div>
        )
    }
}

NewComment.propTypes = {
    parentId: PropTypes.string.isRequired,
    author: PropTypes.string,
    content: PropTypes.string,
    cancelComment: PropTypes.func.isRequired,
    createNewComment: PropTypes.func.isRequired,
    editNewComment: PropTypes.func.isRequired
}

export default NewComment
