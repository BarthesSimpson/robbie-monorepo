import React from 'react'

//COMPONENTS
import ListContainer from '../List/ListContainer'

//STYLING
import logo from '../../img/logo_alt.svg'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What would you like to discuss today?</h2>
      </div>
      <ListContainer />
    </div>
  )
}

export default App
