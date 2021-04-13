import React, {Component} from 'react'
import Header from '../Header/Header'
import Cards from '../Cards/Cards' 
import IntroAbout from '../IntroAbout/Intro'
// import Footer from '../Footer/Footer'
class LandingPage extends Component {

    render(){
        return (
            <div>
                <Header/>
                <IntroAbout/>
                <Cards/>
            </div>
        )
    }
}

export default LandingPage

