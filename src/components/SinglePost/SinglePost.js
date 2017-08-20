import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import Header from '../Header'
import Post from '../Post'
import PostControls from '../Post/PostControls'
import YesNoDialog from '../Dialogs/YesNoDialog'
import Spinner from '../Spinner'

//------- HELPERS
import { goHome } from '../../helpers/navigation'

//------- STYLING
import './SinglePost.css'

class SinglePost extends React.Component {
  constructor() {
    super()
    this.state = {
      deleting: false
    }
    this.toggleDelete = this.toggleDelete.bind(this)
  }
  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }
  postTimedOut() {
    goHome()
  }
  toggleDelete() {
    this.setState({ deleting: !this.state.deleting })
  }
  render() {
    const controlProps = {
      ...this.props,
      deletePost: () => this.toggleDelete
    }
    console.log({ controlProps })
    const post = controlProps.post
    return post
      ? <div className="SinglePost">
          <Header msg={post.title} editing={this.props.isEditing} />
          {this.props.isEditing || <PostControls {...controlProps} />}
          {this.state.deleting &&
            <YesNoDialog
              message="Are you sure you want to delete this post?"
              _onConfirm={this.props.deletePost(post.id)}
              _onCancel={this.toggleDelete}
            />}
          <Post
            post={post}
            editing={this.props.isEditing}
            updating={this.props.isUpdating}
          />
          {/* <Comments post={post}/> */}
        </div>
      : <Spinner timeout={this.postTimedOut} />
  }
}

SinglePost.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  post: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired
}

export default SinglePost
