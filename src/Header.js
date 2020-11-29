import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import './Header.css'
import Logo from './Assets/logo.png'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
function Header() {
    const history = useHistory()

    const handleClickLogin =(e) => { 
        e.preventDefault()
        history.push('/login')
    }
    return (
        <div className="header">
            <div className="header_left">
                <img className="header_leftLogo" src={Logo} alt="twitch logo"/>
                <div className="header_verticalLine"> </div>
                <h3>Browse</h3>       
            </div> 
            <div className="header_center">
                <div className="header_centerLogoContainer">
                    <SearchIcon/>
                </div>
                <input type="text" placeholder="Search"/>
              
            </div>
            <div className="header_right">
               <div className="header_rightContainer">
                  
                    <Button variant="outlined" style={{color:'#1ED400'}} onClick={handleClickLogin}>Log in</Button>
                    <Button variant="outlined" style={{color:'#1ED400'}}>Sign Up</Button>
                    <Avatar className="header_rightAvatar"/>
               </div>
            </div>
        </div>
    )
}

export default Header
