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
    generatePost(p) {
        const url = `/posts/${p.id}`
        return (
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
        const posts = this.props.posts
        return (
            <div className="Category">
                {toTitleCase(category.name)}
                <FontAwesome
                    className="icon"
                    size="2x"
                    name={icons[category.name]}
                />
                {this.props.isLoading &&
                    <FontAwesome
                        className="icon"
                        size="2x"
                        name="spinner"
                        spin
                    />}
                {posts && posts.map(p => this.generatePost(p))}
            </div>
        )
    }
}

Category.PropTypes = {
    category: PropTypes.string.isRequired,
    getPosts: PropTypes.func.isRequired
}
export default Category
