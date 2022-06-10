import "./post.css";
import {MoreVert} from "@mui/icons-material";

export default function Post() {
  return (
    <div>
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img className="postProfileImg" src="/assets/person/cheetah.jpeg" alt="" />
                      <span className="postUsername">Andrew N'Dri</span>
                      <span className="postDate">5 mins ago</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert/>
                  </div>
              </div>
              <div className="postCenter"></div>
              <div className="postBottom"></div>
          </div>
      </div>
    </div>
  );
}
