import { Person, Search, Chat, Notifications} from '@mui/icons-material'
import React from 'react'
import "./topbar.css"
import img1 from '../../assets/me-about.jpg'
import { Link } from 'react-router-dom'
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
      <Link className='linkRoute' to="/"><span className="logo">DPLOOK</span></Link>
      </div>
      <div className="topbarCenter">
           <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search DPLOOK' className="searchInput" />
           </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
          <Link className='linkRoute' to="/"><span className="topbarLink">Home</span></Link>
          <Link className='linkRoute' to="/Profile"><span className="topbarLink">Timeline</span></Link>
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
          <Link className='linkRoute' to="/Profile">
          <img src={img1} alt="" className="topbarImg" /></Link>
      </div>
 
    </div>
  )
}

export default Topbar
