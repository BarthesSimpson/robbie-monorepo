import moment from 'moment'
import uuidv4 from 'uuid/v4'

export function newPost(author, category, title, content) {
    return {
        author,
        category,
        title,
        body: content,
        timestamp: moment().unix(),
        id: uuidv4()
        //THE SERVER ALREADY DOES THIS EXTRA WORK
        // voteScore: 0,
        // deleted: false
    }
}

export function newComment(author, parentId, content) {
    return {
        author,
        parentId,
        body: content,
        timestamp: moment().unix(),
        id: uuidv4(),
        // voteScore: 0,
        // deleted: false
    }
}
