import React from "react";
import "./Login.css";

const Login = () => {
  const submitlogin = () => {};
  return (
    <div className="login_form">
      <h2>Login or Sign in</h2>
      <form onSubmit={submitlogin}>
        <button className="facebook_login">Connect with Facebook</button>
        <button className="google_login"> Connect with Google</button>
        <div className="login_or center">
          <span>Or</span>
          <div className="or_divider"></div>
        </div>
        <input
          type="text"
          className="browser_default"
          placeholder="Email address"
        />
        <input
          type="password"
          className="broswer_default"
          placeholder="Password"
        />
        <button className="sign_in_button">Login</button>
        <div className="divider"></div>
        <div>Don't have an account ? Sign in </div>
      </form>
    </div>
  );
};

export default Login;
