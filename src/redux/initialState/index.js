export default {
    categories: {},
    comments: {},
    posts: {},
        controls: {
        commenting: null,
        editing: null,
        content: null
    },
        newComment: {
        author: '',
        parentId: '',
        content: ''
    },
    newPost: {
        author: '',
        category: null,
        title: '',
        content: ''
    },
    render: {
        category: 'all',
        post: null,
        level: 'category',
        menuVisible: false,
        categoriesAreLoading: true,
        postsAreLoading: {},
        postIsUpdating: {},
    },
    sorting: {
        posts: 'timestamp',
        comments: 'timestamp'
    }

}
