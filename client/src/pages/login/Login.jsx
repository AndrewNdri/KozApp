import "./login.css";
import {useRef} from "react";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
    const email = useRef();
    const password = useRef();
    //const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value });
    };
    //console.log(user);
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h3 className="loginLogo">KozApp</h3>
                <span className="loginDesc">
                    Connect with friends and the world on KozApp.
                </span>
            </div>
            <div className="loginBottom">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
                    <input placeholder="Password" type="password" className="loginInput" ref={password} required minLength="6"/>
                    <button className="loginButton" >Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </form>
            </div>
        </div>
    </div>
  );
}
