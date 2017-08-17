import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

//------- CONSTANTS
import icons from '../../../constants/icons'

//------- HELPERS
import { toTitleCase } from '../../../helpers/text'

//------- STYLING
import './Category.css'

class Category extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.category.name)
    }
    generatePostPreview(p) {
        const url = `/posts/${p.id}`
        return (
            //<---THIS SHOULD PROBABLY BE ITS OWN COMPONENT
            <Link to={url} className="post-preview-container" key={p.id}>
                <span className="post-preview-title">
                    {p.title}
                </span>
                <span className="post-preview-teaser">
                    {p.body.substring(0, 100) + '...'}
                </span>
            </Link>
        )
    }
    render() {
        const category = this.props.category
        const url = `/categories/${category.name}`
        const posts = this.props.posts
        const catClass =
            'Category' + (this.props.single ? ' single-category' : '')
        return (
            <div className={catClass}>
                <Link to={url} className="category-title">
                    {toTitleCase(category.name)}
                    <FontAwesome
                        className="icon"
                        size="2x"
                        name={icons[category.name]}
                    />
                </Link>
                {this.props.isLoading &&
                    <FontAwesome
                        className="icon"
                        size="2x"
                        name="spinner"
                        spin
                    />}
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
