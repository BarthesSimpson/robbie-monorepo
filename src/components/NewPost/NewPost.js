import React from 'react'

//------- COMPONENTS
import Header from '../Header'
import YesNoDialog from '../Dialogs/YesNoDialog'

//------- CONSTANTS
import messages from '../../constants/messages'

//------- STYLING
import './NewPost.css'

class NewPost extends React.Component {
    render() {
        return (
            <div className="NewPost">
                <Header msg={messages.header.newPost} />
                <label htmlFor="new-post-name">
                    Your Name:
                </label>
                <input
                    value={this.props.author}
                    placeholder="Your Name"
                    className="new-post-name"
                    onChange={e =>
                        this.props.editNewPost('author', e.target.value)}
                    ref={input => {
                        this.textInput = input
                    }}
                />
                <label htmlFor="new-post-title">
                    Title:
                </label>
                <input
                    value={this.props.title}
                    placeholder="Post Title"
                    className="new-post-title"
                    onChange={e =>
                        this.props.editNewPost('title', e.target.value)}
                />
                <label htmlFor="new-post-cat">
                    Category:
                </label>
                <select
                    id="new-post-cat"
                    className="new-post-cat"
                    value={this.props.category}
                    onChange={e =>
                        this.props.editNewPost('category', e.target.value)}
                >
                    {this.props.categories.map(c => {
                        return (
                            <option
                                className="new-comment-option"
                                name={c}
                                value={c}
                                key={c}
                            >
                                {c}
                            </option>
                        )
                    })}
                </select>
                <textarea
                    value={this.props.content}
                    placeholder="Write your comment here..."
                    className="new-post-content"
                    onChange={e =>
                        this.props.editNewPost('content', e.target.value)}
                />
                <YesNoDialog
                    confirmText="Save"
                    _onConfirm={() =>
                        this.props.createNewPost(
                            this.props.author,
                            this.props.category,
                            this.props.title,
                            this.props.content,
                            this.props.history
                        )}
                    _onCancel={() => this.props.cancelPost(this.props.history)}
                />
            </div>
        )
    }
}

export default NewPost
