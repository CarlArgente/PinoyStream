import React from 'react'
import './Channel.css'
const Channel = ({avatar, name, game, followers}) => { 
    return(
        <div className="channel">
            <div className="channel_details">
                <img src={avatar} alt="avatar" />
                <div className="channel_info">
                    <p>{name}</p>
                    <small>{game}</small>
                </div>
            </div>
            <p>{followers}</p>
        </div>
    )
}

export default Channel
