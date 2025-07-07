import "./sidebar.css";
import { RssFeed, Chat, PlayCircle } from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

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
                    {Users.map(u=><CloseFriend key={u.id} user={u}/>)}
                </ul>
            </div>
        </div>
    );
}