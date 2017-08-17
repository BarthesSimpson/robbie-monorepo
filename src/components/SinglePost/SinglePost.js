import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import Header from '../Header'
import Post from '../Post'
import Spinner from '../Spinner'

//------- HELPERS
import { goHome } from '../../helpers/navigation'

//------- STYLING
import './SinglePost.css'

class SinglePost extends React.Component {
    componentDidMount() {
        this.props.fetchSinglePost(this.props.postId)
    }
    postTimedOut() {
        goHome()
    }
    render() {
        console.log(this.props)
        const post = this.props.post
        return post
            ? <div className="SinglePost">
                  <Header msg={this.props.post.title} />
                  <Post post={this.props.post} />
              </div>
            : <Spinner timeout={this.postTimedOut} />
    }
}

SinglePost.PropTypes = {
    fetchSinglePost: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    post: PropTypes.object
}

export default SinglePost
