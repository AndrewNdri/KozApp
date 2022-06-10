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
              <div className="postCenter">
                  <span className="postText">Hey!</span>
                  <img src="/assets/lion.jpeg" alt="" className="postImg" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">42 people like  it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
