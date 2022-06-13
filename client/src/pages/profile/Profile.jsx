import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(()=>{
        const fetchUser = async()=>{
          const res = await axios.get(`/users?username=Matthiew`);
          setUser(res.data);
        };
        fetchUser();
      }, []);
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={`${PF}lion.jpeg`} alt="" className="profileCoverImg" />
                        <img src={`${PF}person/cheetah.jpeg`} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username="Matthiew"/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
  );
}
