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
        author: '',
        category: null,
        title: '',
        content: ''
    },
    newComment: {
        author: '',
        parentId: '',
        content: ''
    }
}
