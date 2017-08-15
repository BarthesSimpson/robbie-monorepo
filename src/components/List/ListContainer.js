import { connect } from 'react-redux'
import List from './'

const mapStateToProps = state => {
    return {
        items: [
            {
                title: 'react',
                topPostId: '123'
            },
            {
                title: 'redux',
                topPostId: '123'
            },
            {
                title: 'udacity',
                topPostId: '123'
            },            
            {
                title: 'boobs',
                topPostId: '123'
            },
        ]
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

// const mergeProps = (stateProps, dispatchProps) => {}

// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(List)
export default connect(mapStateToProps, mapDispatchToProps)(List)
