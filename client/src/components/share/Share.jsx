import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from "@mui/icons-material";
import {  useRef, useState } from "react";
import {useSelector} from "react-redux";
import axios from "axios";

export default function Share() {

    const user = useSelector((state) => state.userReducer);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);


    const submitHandler = async (e) =>{
        e.preventDefault();
        // const newPost = {
        //     userId: user._id,
        //     desc: desc.current.value
        // };

        const data = new FormData();
        if (file){
            const fileName = user._id + Date.now() + ".jpeg";
            data.append('file', file);
            data.append('userId', user._id);
            data.append('name', fileName);
            data.append('desc', desc.current.value);
            //newPost.img = fileName;
            // try{
            //     await axios.post('/upload', data);
            // }catch(err){
            //     console.log(err);
            // }
            // console.log(data);
        }

        try{
            await axios({
                method: "post",
                baseURL: `http://localhost:8000/api/posts`,
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: data
            });
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
              <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.jpeg"} alt="" />
              <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={desc}/>
          </div>
          <hr className="shareHr"/>
          {file && (
            <div className="shareImgContainer">
                <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                <Cancel className="shareCancelImg" onClick={() => setFile(null)}/>
            </div>
          )}
          <form className="shareBottom" onSubmit={submitHandler}>
              <div className="shareOptions">
                  <label htmlFor="file" className="shareOption">
                      <PermMedia htmlColor="tomato" className="shareIcon"/>
                      <span className="shareOptionText">Photo or Video</span>
                      <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                  </label>
                  <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon"/>
                      <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor="green" className="shareIcon"/>
                      <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                      <span className="shareOptionText">Feeling</span>
                  </div>
              </div>
              <button className="shareButton" type="submit">Share</button>
          </form>
      </div>
    </div>
  );
}
