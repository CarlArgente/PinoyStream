import React from 'react'
import picture from './Assets/jerric.jpg'
import RecentItem from './RecentItem'
import './Profile.css'

const Profile = () => {
    return (
        <div className="profile"> 
            <div className="profile_topLeft">
                <img src={picture}/>

                <div className="profile_topLeftDetails">
                    <h1>Carl Argente</h1>
                    <h3>200 followers</h3>
                </div>
                <div className="profile_topRight">

                </div>
                <div className="profile_menu">
                    <h2 className='active'>Home</h2>
                    <h2>About</h2>
                    <h2>Schedule</h2>
                    <h2>Videos</h2>
                    <h2>Chat</h2>
                </div>
                <div className='profile_recent'>
                    <h2>Recent Broadcast</h2>
                    <div className="profile_recentItems">
                        <RecentItem url={"https://www.youtube.com/embed/ktjafK4SgWM"} title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)'}/>
                        <RecentItem url={"https://www.youtube.com/embed/ktjafK4SgWM"} title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)'}/>
                        <RecentItem url={"https://www.youtube.com/embed/ktjafK4SgWM"} title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)'}/>
                    </div>
                    <div className="profile_categories">
                        <h2>Carl Argente's recently streamed categories</h2>
                        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"/>
                        <h3>MORRG and War</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
