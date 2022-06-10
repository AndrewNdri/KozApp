import "./register.css";

export default function Register() {
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
                <div className="registerBox">
                    <input placeholder="Username" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                    <button className="registerLoginButton">Log into account</button>
                </div>
            </div>
        </div>
    </div>
  );
}
