import React from 'react'
import PropTypes from 'react-proptypes'

//-------COMPONENTS
import Category from './Category'

//-------HELPERS
import { sortItems } from '../../helpers/sorting'

//-------STYLING
import './Categories.css'

class Categories extends React.Component {
    generateCategory(c) {
        const catProps = {
            key: c,
            category: c,
            posts: sortItems(
                this.props.posts[c],
                this.props.sortedBy
            ).map(p => {
                return { ...p, comments: this.props.comments[p.id] }
            }),
            getPosts: this.props.getPosts,
            isLoading: this.props.postsLoading[c],
            single: this.props.single
        }
        return <Category {...catProps} />
    }
    render() {
        const cats = this.props.categories
        return (
            <div className="Categories">
                {cats.length
                    ? cats.map(c => this.generateCategory(c))
                    : <h3 className="cat-not-found">Category Not Found</h3>}
            </div>
        )
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    postsLoading: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

export default Categories
