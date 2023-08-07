import React from "react";
import "./Login.css";
import Logo from "../assets/Logo/Logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
        <p className="logoText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          sequi quia consequuntur dolore architecto. Quasi, porro exercitationem
          labore voluptatem eos pariatur neque vero a, id culpa delectus dicta
        </p>
      </div>
      <div className="input">
        <input className="inputForm" type="text" placeholder="WalletId" />
        <input className="inputForm" type="password" placeholder="Password" />
        <div className="inputspan">
          <Link className="inputLink" to="/Register">
            <p>Register Now</p>
          </Link>
          <p>Forgot Password?</p>
        </div>
        <Link className="inputBtn" to="/Dashboard">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
