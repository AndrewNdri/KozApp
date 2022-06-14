import "./login.css";

export default function Login() {
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
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  );
}
