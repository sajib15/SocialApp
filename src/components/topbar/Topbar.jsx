import { Person, Search, Chat, Notifications} from '@mui/icons-material'
import React from 'react'
import "./topbar.css"
import img1 from '../../assets/me-about.jpg'
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
           <span className="logo">DPLOOK</span>
      </div>
      <div className="topbarCenter">
           <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search DPLOOK' className="searchInput" />
           </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
             <div className="topbarIconItem">
                <Person/>
                <span className="topbarIonBadge">1</span>
             </div>
             <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIonBadge">2</span>
             </div>
             <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIonBadge">1</span>
             </div>
          </div>
          <img src={img1} alt="" className="topbarImg" />
      </div>
 
    </div>
  )
}

export default Topbar
