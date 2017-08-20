import React, { Component } from 'react'
import PropTypes from 'prop-types'

import YesNoDialog from '../Dialogs/YesNoDialog'

import './EditComment.css'

class EditComment extends Component {
    componentDidMount() {
        const textInput = this.refs.textInput
        textInput.focus()
        textInput.select()
    }

    render() {
        return (
            <div className="EditComment">
                <textarea
                    className="edit-comment"
                    ref="textInput"
                    value={this.props.content}
                    onChange={e => this.props.updateContent(this.props.commentId, e.target.value)}
                />
                <YesNoDialog
                    confirmText="Save"
                    _onConfirm={() => this.props.confirmEdit(this.props.commentId, this.props.content)}
                    _onCancel={this.props.cancelEdit}
                />
            </div>
        )
    }
}

EditComment.propTypes = {
    commentId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    confirmEdit: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    updateContent: PropTypes.func.isRequired
}

export default EditComment
