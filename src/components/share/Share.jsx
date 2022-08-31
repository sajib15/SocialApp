import React from 'react'
import './share.css'
import img1 from '../../assets/me-about.jpg'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
               <img src={img1} alt="" className="shareProfileImg" />
                <input placeholder='What is on your mind?' className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/> 
                        <span className="shareOptionText">
                           Photos & videos.
                        </span>
                    </div>
                    <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/> 
                        <span className="shareOptionText">
                           Tag
                        </span>
                    </div>
                    <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/> 
                        <span className="shareOptionText">
                          Location
                        </span>
                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/> 
                        <span className="shareOptionText">
                           Feelings
                        </span>
                    </div>
                </div>
                <button className="shareButton">Share</button>

            </div>
        </div>
    </div>
  )
}

export default Share