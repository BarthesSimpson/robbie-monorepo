import React, { Component } from 'react'
import PropTypes from 'prop-types'

import YesNoDialog from '../Dialogs/YesNoDialog'

import './EditPost.css'

class EditPost extends Component {
    componentDidMount() {
        const textArea = this.refs.textArea
        textArea.focus()
        textArea.select()
    }

    render() {
        return (
            <div className="EditPost">
                <textarea
                    className="edit-post"
                    ref="textArea"
                    value={this.props.content}
                    onChange={e => this.props.updateContent(this.props.postId, e.target.value, this.props.title)}
                />
                <YesNoDialog
                    confirmText="Save"
                    _onConfirm={() => this.props.confirmEdit(this.props.postId, this.props.content, this.props.title)}
                    _onCancel={this.props.cancelEdit}
                />
            </div>
        )
    }
}

EditPost.propTypes = {
    postId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    confirmEdit: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    updateContent: PropTypes.func.isRequired
}

export default EditPost
