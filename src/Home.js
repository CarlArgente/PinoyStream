import React from 'react'
import './Home.css'
import logo from './Assets/background.svg'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home__image" src={logo} alt="twitch logo"/>
            </div>
        </div>
    )
}

export default Home
