import "./post.css";
import {MoreVert} from "@mui/icons-material";
//import { Users } from "../../dummyData";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
//import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  // console.log(post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const currentUser = useSelector((state) => state.userReducer);
  
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(()=>{
    const fetchUser = async()=>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = ()=>{
    try{
      axios.patch(`/posts/${post._id}/like`, {userId: currentUser._id});
    }catch(err){}
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                      <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : `${PF}person/avatar.jpeg`} alt="" />
                    </Link>
                      <span className="postUsername">{user.username}</span>
                      <span className="postDate">{format(post.createdAt)}</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img src={post.img} alt="" className="postImg" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                    <img src={`${PF}like.png`}alt="" className="likeIcon" onClick={likeHandler}/>
                    <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like} people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post.comment} comments</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
