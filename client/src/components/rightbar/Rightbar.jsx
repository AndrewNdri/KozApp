import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
          {Users.map(u=> <Online key={u.id} user={u}/>)}
        </ul>
      </>
    );
  };

  const ProfileRightbar = ()=>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Takoradi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Abidjan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}lion.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingNam">Vince Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}lion.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingNam">Vince Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}lion.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingNam">Vince Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}lion.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingNam">Vince Carter</span>
          </div>
          
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
