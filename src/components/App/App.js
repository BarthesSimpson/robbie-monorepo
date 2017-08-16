import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import Home from '../Home'
import Category from '../Categories/Category'
import { Switch, Route } from 'react-router-dom'

//------- STYLING
import './App.css'

class App extends React.Component {
    componentDidMount() {
        // console.log(this.props.getCategories)
        this.props.getCategories()
    }
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/categories/:category" component={Category} />
                </Switch>
            </div>
        )
    }
}

App.PropTypes = {
    getCategories: PropTypes.func.isRequired
}

export default App
