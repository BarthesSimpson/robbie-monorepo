export default {
    categories: {},
    posts: {},
    comments: {},
    render: {
        categoriesAreLoading: true,
        postsAreLoading: {},
        postIsUpdating: {},
        sortedBy: 'recent'
    },
    controls: {
        commenting: null,
        editing: null,
        content: null
    },
    newPost: {
        author: null,
        category: null,
        title: null,
        content: null
    },
    newComment: {
        author: null,
        parentId: null,
        content: null
    }
}
