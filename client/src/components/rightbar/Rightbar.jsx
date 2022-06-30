import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Add, Remove} from '@mui/icons-material';
import {useSelector, useDispatch} from "react-redux";
import { Follow, Unfollow } from "../../context/AuthActions";
//import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const [friends, setFriends] = useState([]);
  const currentUser = useSelector((state) => state.userReducer);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));

  
  useEffect(() =>{
    const getFriends = async ()=>{
      try{
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data)
      }catch(err){
        console.log(err);
      }
    }
    getFriends();
  }, [user]);

  const handleClick = async ()=>{
    try{
      if(followed){
        await dispatch(Unfollow(currentUser._id, user._id));
        //dispatch({type: "UNFOLLOW", payload: user._id});
      }else{
        await dispatch(Follow(currentUser._id, user._id));
        //await axios.patch("/users/"+user._id+"/follow", {userId: currentUser._id});
        //dispatch({type: "FOLLOW", payload: user._id});
      }
    }catch(err){
      console.log(err);
    }
    setFollowed(!followed);
  };

  const HomeRightbar = ()=>{
    return(
      <>
        <div className="birthdayContainer">
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Justin Raines</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map(u=> <Online key={u._id} user={u}/>)}
        </ul>
      </>
    );
  };

  const ProfileRightbar = ()=>{
    return(
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> : <Add/>}
        </button>
      )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend => (
            <Link to={`/profile/${friend.username}`} style= {{textDecoration: 'none'}}>
                <div className="rightbarFollowing">
                  <img src={friend.profilePicture ? PF+friend.profilePicture : PF+'person/avatar.jpeg'} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingNam">{friend.username}</span>
                </div> 
            </Link>
          )))}         
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
