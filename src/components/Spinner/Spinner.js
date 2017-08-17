import React from 'react'
import './Spinner.css'

import FontAwesome from 'react-fontawesome'

import { maxWait } from '../../constants/timing'

class Spinner extends React.Component {
    componentDidMount() {
        const timeout = this.props.timeout
        if (timeout) {
            setTimeout(timeout, maxWait)
        }
    }
    render() {
        return (
            <div className="Spinner">
                <FontAwesome className="icon" size="2x" name="spinner" spin />
            </div>
        )
    }
}

export default Spinner
