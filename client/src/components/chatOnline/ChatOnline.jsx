import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(()=>{
    const getFriends = async ()=>{
      const res = await axios.get(`/users/friends/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  },[currentId]);

  useEffect(()=>{
    setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)));
  },[friends, onlineUsers]);

  return (
    <div className="chatOnline">
      {onlineFriends.map(o => (
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
              <img src="" alt=""  className="chatOnlineImg"/>
              <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
      ))}
    </div>
  );
}
