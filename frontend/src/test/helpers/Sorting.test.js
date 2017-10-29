import { sortItems } from '../../helpers/sorting'
import dummyPosts from '../constants/dummyPosts'

function arraysMatch(a, b) {
    if (a.length !== b.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
        return true
    }
}
describe('Sorting tests', () => {
    it('sorts correctly by timestamp', () => {
        const sorted = sortItems(dummyPosts, 'timestamp').map(p => p.id)
        expect(arraysMatch(sorted, [2, 1, 0])).toBe(true)
    })
    it('sorts correctly by viewScore', () => {
        const sorted = sortItems(dummyPosts, 'voteScore').map(p => p.id)
        expect(arraysMatch(sorted, [0, 1, 2])).toBe(true)
    })
})
