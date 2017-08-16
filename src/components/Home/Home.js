import React from 'react'

//------- COMPONENTS
import Header from '../Header'
import CategoriesContainer from '../Categories/CategoriesContainer'

//------- CONSTANTS
import messages from '../../constants/messages'

//------- STYLING
import './Home.css'


class Home extends React.Component {
    state = {}

    render() {
        return (
            <div className="Home">
                <Header msg={messages.header.home}/>
                <CategoriesContainer />
            </div>
        )
    }
}

export default Home
