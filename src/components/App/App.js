import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import Home from '../Home'
import SingleCategory from '../SingleCategory'
import SinglePostContainer from '../SinglePost/SinglePostContainer'
import { Switch, Route } from 'react-router-dom'

//------- STYLING
import './App.css'

class App extends React.Component {
    componentDidMount() {
        this.props.getCategories()
    }
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        path="/categories/:category"
                        component={SingleCategory}
                    />                    
                    <Route
                        path="/posts/:post"
                        component={SinglePostContainer}
                    />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

App.PropTypes = {
    getCategories: PropTypes.func.isRequired
}

export default App
