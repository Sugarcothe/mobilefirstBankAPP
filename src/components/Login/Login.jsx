import React, { useState } from "react";
import "../Register/Register.css";
import Logo from "../assets/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [walletId, setWalletId] = useState("");

  const navigate = useNavigate(); // Get the history object

  const handleLogin = (e) => {
    // Your login logic here
    // Assuming successful login, navigate to Dashboard and pass walletId
    navigate("/Dashboard", { state: { walletId } });
  };

  return (
    <div className="container">
      <div className="logo">
        <Logo />
        <h3>BlackWallet</h3>
        <p className="logoText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          sequi quia consequuntur dolore architecto. Quasi, porro exercitationem
          labore voluptatem eos pariatur neque vero a, id culpa delectus dicta
        </p>
      </div>
      <div className="input">
        <input
          className="inputForm"
          type="text"
          placeholder="WalletId"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          
        />
        <input className="inputForm" type="password" placeholder="Password" />
        <div className="inputspan">
          <Link className="inputLink" to="/Register">
            <p>Register Now</p>
          </Link>
          <p>Forgot Password?</p>
        </div>
        <Link className="inputBtn" to="/Dashboard" onClick={handleLogin}>
          Login
        </Link>
      </div>
      <p className="warning">
        This project is for learning purposes, and can only be allowed for
        learning purpose. Unauthorized copying or commercial use is prohibited.{" "}
        <br />{" "}
        <span>
          <a
            className="github"
            href="https://github.com/Sugarcothe/mobilefirstBankAPP"
          >
            View Github
          </a>
        </span>
      </p>
    </div>
  );
};

export default Login;
