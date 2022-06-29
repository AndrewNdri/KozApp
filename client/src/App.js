import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
//import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import { UidContext } from "./context/AppContext";
import {useDispatch} from "react-redux";
import { getUser } from "./context/AuthActions";

function App() {
  //const {user} = useContext(AuthContext);
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchjwtidToken = async() => {
      await axios({
        method: "get",
        url: "/jwtid",
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data)
        setUid(res.data);
      })
      .catch((err) => console.log("No token"));
    }
    fetchjwtidToken();


    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>

      <Router>
            <Routes>
              <Route exact path="/" element={uid ? <Home/> : <Login/>}/>
              <Route  path="/login" element={uid ? <Navigate to="/"/> : <Login/>}/>
              <Route  path="/profile/:username" element={<Profile/>}/>
              <Route  path="/register" element={uid ? <Navigate to="/"/> : <Register/>}/>
              <Route  path="/messenger" element={uid ? <Messenger/> : <Login/>}/>
            </Routes>
      </Router>

    </UidContext.Provider>
  );
}

export default App;
