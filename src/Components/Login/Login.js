import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/UserAction";
import { openModal } from "../../Action/ModalAction";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("closed", ""));
      //LATER
    }
  }, [dispatch, userInfo]);

  const submitlogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="login_form">
      <h2>Login or Sign in</h2>
      {error && <h2>{error}</h2>}
      {loading && <h2>loading...</h2>}
      {}
      <form onSubmit={submitlogin}>
        <button className="facebook_login">Connect with Facebook</button>
        <button className="google_login"> Connect with Google</button>
        <div className="login_or center">
          <span>Or</span>
          <div className="or_divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser_default"
          placeholder="Email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
