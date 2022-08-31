import { RssFeed } from '@mui/icons-material'
import React from 'react'
import './sidebar.css'
import img2 from "../../assets/avatar2.jpg"
import { list_data } from '../../data'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
   <ul className="sidebarList">
{list_data.map((data)=>{
 return (<li className="sidebarListItem">
 {data.icon}
 <span className="sidebarListItemText">{data.title}</span>
</li>)
})}
       
   </ul>
<button className="sidebarButton">Show More</button>
<hr className='sidebarHr'/>
<ul className="sidebarFriendList">
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
  <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={img2} alt="" />
    <span className="sidebarFriendName">Tony Stark</span>
  </li>
</ul>
      </div>
     
    </div>
  )
}

export default Sidebar 