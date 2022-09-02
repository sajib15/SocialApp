import React from 'react'
import './rightbar.css'
import birt from '../../assets/birthday.png'
import img1 from "../../assets/portfolio2.jpg"

import friImg from "../../assets/me-about.jpg"
const Rightbar = () => {


 
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      
      <div className="birthdayContainer">
        <img src={birt} alt="" className="birthdayImg" />
        <span className="birthdayText"><b>John Momo</b> and <b>3 Other friends</b> have birthday Today</span>
      </div>
      <img src={img1} alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
        <li className="rightBarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={friImg} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Robert Joe</span>
        </li>
      </ul>
      </div>
      </div>
  )
}

export default Rightbar