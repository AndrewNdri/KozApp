import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect } from "react";
//import {Posts} from "../../dummyData";
import axios from "axios";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username 
      ? await axios.get("posts/timeline/62a012cd0487ba62d528b3c6")
      : await axios.get("posts/timeline/62a012cd0487ba62d528b3c6");
      setPosts(res.data);
    };
    fetchPosts();
  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map(p => <Post key={p.id} post={p}/>
        )}
      </div>
    </div>
  );
}
