import './sidemiddle.css'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { format } from 'timeago.js'
import axios from "axios";
import {   useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { FaEllipsisV } from "react-icons/fa";



const SideMiddle = ({ post } ) => {
 
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  const {user } = useContext(AuthContext);

  const [like , setLike] = useState(post.likes.length)
  const [Isliked , setIsLiked] = useState(false)
  const [edit , setEdit] = useState(false)

 


  const LikeHandler  =()=>{
    setLike(Isliked? like-1: like+1)
    setIsLiked(!Isliked)
  }

  return (

    <div className="sidemiddle">
      <div className="feedCOntainer">
    

      {/* users.filter(u=>u.id===post.userId)[0] */}
        <div className="titalcontaner">
       
          <div className="userItem">
          <div className="editPost">
         
            <div className="editIcon" >
            <FaEllipsisV onMouseEnter={()=> setEdit(!edit)}/>
            </div>
          
          </div>
          {/* {
            edit && 
            <div className="pEdit">
                  <p>Edit</p>
            </div>
            
          } */}
         
            <span className="userTittle">{user.username}</span>
            
              <span className="userUniversity">{user.college}</span>
            <span className="userAddress">{user.city}</span>
            <span className="feedDate ">{format(post.createdAt)}</span>

          </div>
         
          <div className="imagItem">
            
            <img src={PF + user.profilePicture || PF+"/logo2.png"}
           
            alt="" className="userImage" />
            <span className="folloewUser">Follow </span>
          </div>
          
        </div>
      
        
        <div className="topicDescription">
          <span className="feedtopicTittle ">{post.tittle}</span>
         
          <span className="feedDescription">{post.description}</span>
          <span className="readMoreDesc ">read more..</span>
          <span className="feedDescription-1">{post.collegepublication}</span>
          <span className="feedDescription-1">Created by :- {post.createdby}</span>
         

        </div>
        <div className="descritpionImage">
            <img src={PF + post.img} alt="" className='descImage' />
        </div>

        <div className="descriptionReaction">
          <div className="likeFeed counter-1">
            <ThumbUpIcon onClick={LikeHandler} />
            <span className="likeCounter i2">{like}</span>

          </div>
          <div className="commentFeed counter-1">
            <ChatBubbleOutlineIcon />
            <span className="commentCounter i2">{post.comment}</span>

          </div>
          <div className="shareFeed counter-1">
            <ScreenShareIcon />
            <span className="shareCount i2">{post.share}</span>

          </div>

        </div>
      </div>
      
    </div>

  )
}

export default SideMiddle
