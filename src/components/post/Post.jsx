import React from 'react'
import "./post.css"
import img1 from '../../assets/me-about.jpg'
import heart from '../../assets/heart.png'
import like from '../../assets/like.png'
import { MoreVert } from '@mui/icons-material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                 <img src={img1} alt="" className="postProfileImg" />
                 <span className="postUsername">Jhon Cornar</span> 
                 <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
             <span className="postText">Hello EveryOne :)</span>
               <img src={img1} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className='likeIcon icon'/>
                    <FavoriteIcon className='heartIcon icon'/>
                    <span className="postlikeCounter">124 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post