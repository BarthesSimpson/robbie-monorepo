import React from 'react'

//COMPONENTS
import CategoriesContainer from '../Categories/CategoriesContainer'

//STYLING
import logo from '../../img/logo_alt.svg'
import './App.css'

class App extends React.Component {
    componentDidMount() {
        // console.log(this.props.getCategories)
        this.props.getCategories()
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>What would you like to discuss today?</h2>
                </div>
                <CategoriesContainer />
            </div>
        )
    }
}

export default App
