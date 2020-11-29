import React,{useState, useEffect} from 'react'
import Channel from './Channel'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
const Sidebar = () => {
    const [clickShowMore, setClickShowMore] = useState(false)
    const [clickShowMore1, setClickShowMore1] = useState(false)

    const handleClickShowMore =(e) => { 
        e.preventDefault()
        setClickShowMore(true)
    }
    const handleClickShowMore1 =(e) => { 
        e.preventDefault()
        setClickShowMore1(true)
    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h5>GENRE</h5>

                <h5>FOLLOWED CHANNELS</h5>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="Cejooooos"
                    game="Dota 2"
                    followers="🔴1.4k"/>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="JerricBersamin"
                    followers="Offline"/>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="Kairuu"
                    followers="Offline"/>
                    {
                        clickShowMore ? <div>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="Ryan Tan"
                            followers="Offline"/>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="Cura bells"
                            followers="Offline"/>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="Kolayn"
                            followers="Offline"/>
                        </div>   : ""
                     }
                     <p className="sidebar_topShowMore" onClick={handleClickShowMore}>{clickShowMore ? '' : 'Show More'}</p>
                  
                <h5>RECOMMENDED CHANNELS</h5>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="Carl Argente"
                    game="League of Legends"
                    followers="🔴4k"/>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="Justine Tan"
                    game="Dota2"
                    followers="🔴3.5k"/>
                    <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                    name="Jerric Bersamin"
                    game="Call of Duty: Advance Warfare"
                    followers="🔴2.5k"/>
                    {
                        clickShowMore1 ?
                        <div>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="Angelo Tan"
                            game="Valorant"
                            followers="🔴3.2k"/>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="James Bersamin"
                            game="League of Legends"
                            followers="🔴1.3k"/>
                            <Channel avatar="https://images-na.ssl-images-amazon.com/images/I/61Rq6Drf7LL._AC_UL200_SR200,200_.jpg"
                            name="Hello World"
                            game="Counter Strike"
                            followers="🔴3.4k"/>
                        </div> : ''
                    }   
                <p className="sidebar_topShowMore" onClick={handleClickShowMore1}>{clickShowMore1 ? '' : 'Show More'}</p>
            </div>
            <div className="sidebar_bottom">
                <div className="sidebar_bottomContainer">
                    <input type="text" placeholder="Search to add Friends"/>
                    <SearchIcon/>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
