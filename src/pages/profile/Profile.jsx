import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"
import cover from "../../assets/portfolio5.png"
import me from "../../assets/me-about.jpg"

const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src={cover} alt="" className="profileCoverImg" />
                <img src={me} alt="" className="profileUserImg" /></div>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Jhon Cornar</h4>
                <span className="profileInfoDesc">Welcome to Hell kitchen</span>
            </div>
            <div className="profileRightBottom">
                <Feed/>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile