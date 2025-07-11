import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect, useContext } from "react";
//import {Posts} from "../../dummyData";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.userReducer);
  console.log(username)

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username 
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get(`posts/timeline/${user._id}`);
      setPosts(res.data.sort((p1, p2) =>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
      );
    };
    fetchPosts();
  },[username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map(p => <Post key={p.id} post={p}/>
        )}
      </div>
    </div>
  );
}
