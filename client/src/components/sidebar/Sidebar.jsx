import "./sidebar.css";
import { RssFeed, Chat, PlayCircle } from "@mui/icons-material";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemTest">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemTest">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon"/>
                        <span className="sidebarListItemTest">Videos</span>
                    </li>
                </ul>
                {/* <button className="sidebarButton">Show</button> */}
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/cheetah.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Andrew N'Dri</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}