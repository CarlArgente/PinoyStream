import React from 'react'
import './RecentItem.css'

const RecentItem = ({url, title}) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encryted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <div className="item_details">
                <img/>
                <div className="item_detailsText">
                    <h4>{title}</h4>
                    <p>Carl Argente</p>
                    <p>Gaming in Computer</p>
                </div>
            </div>
        </div>
        
    )
}

export default RecentItem
