import "./register.css";
import { useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post("/auth/register", user);
                navigate("/login");
            }catch(err){
                console.log(err);
            }
        }
    };

  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerTop">
                <h3 className="registerLogo">KozApp</h3>
                <span className="registerDesc">
                    Connect with friends and the world on KozApp.
                </span>
            </div>
            <div className="registerBottom">
                <form className="registerBox" onSubmit={handleClick}>
                    <input placeholder="Username" required ref={username} className="registerInput" />
                    <input placeholder="Email" type="email" required ref={email} className="registerInput" />
                    <input placeholder="Password" type="password" required ref={password} className="registerInput" minLength="6"/>
                    <input placeholder="Confirm Password" type="password" required ref={passwordAgain} className="registerInput" />
                    <button className="registerButton" type="submit">Sign Up</button>
                    <button className="registerLoginButton">Log into account</button>
                </form>
            </div>
        </div>
    </div>
  );
}
