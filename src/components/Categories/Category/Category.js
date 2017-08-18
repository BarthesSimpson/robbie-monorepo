import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import FontAwesome from 'react-fontawesome'
import Spinner from '../../Spinner'
import PostPreview from '../../Post/PostPreview'
import { Link } from 'react-router-dom'

//------- CONSTANTS
import icons from '../../../constants/icons'

//------- HELPERS
import { toTitleCase } from '../../../helpers/text'

//------- STYLING
import './Category.css'

class Category extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.category)
    }
    generatePostPreview(p) {
        const { id, title, body, author, votes } = p
        const prevProps = {
            id,
            title,
            body,
            author,
            votes,
            key: id
        }
        return <PostPreview {...prevProps} />
    }
    render() {
        const category = this.props.category
        const url = `/categories/${category}`
        const posts = this.props.posts
        const catClass =
            'Category' + (this.props.single ? ' single-category' : '')
        return (
            <div className={catClass}>
                <Link to={url} className="category-title">
                    {toTitleCase(category)}
                    <FontAwesome
                        className="icon"
                        size="2x"
                        name={icons[category]}
                    />
                </Link>
                {this.props.isLoading && <Spinner />}
                {posts && posts.map(p => this.generatePostPreview(p))}
            </div>
        )
    }
}

Category.PropTypes = {
    category: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    single: PropTypes.bool.isRequired
}
export default Category
