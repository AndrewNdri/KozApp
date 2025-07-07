import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import axios from "axios";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const user = useSelector((state) => state.userReducer);
    console.log(user);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchAllUsers = async ()=>{
            try {
                const res = await axios.get('/users/allUsers');
                setAllUsers(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllUsers();
    }, []);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = allUsers.filter((value)=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">KozApp</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <div className="wholeSearchInput">
                        <Search className="searchIcon"/>
                        <input placeholder="Search for friends, post or video" 
                            className="searchInput" 
                            onChange={handleFilter}/>
                    </div>
                    {filteredData.length !== 0 && (
                        <div className="dataResult">
                            {filteredData.slice(0, 10).map((value, key)=>{
                                return <a href="" className="dataItem"><p>{value}</p></a>
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}person/avatar.jpeg`}
                     alt=""
                      className="topbarImg" />
                </Link>
            </div>
        </div>
    );
}