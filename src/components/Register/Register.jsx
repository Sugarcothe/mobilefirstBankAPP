import React from "react";
import "./Register.css";
import { AccountBalance, AccountBalanceWallet } from "@mui/icons-material";
import Logo from "../assets/Logo/Logo";
import { Link } from "react-router-dom";

const Register = () => {
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
        <input className="inputForm" type="email" placeholder="Email" />
        <input className="inputForm" type="password" placeholder="Password" />
        <input
          className="inputForm"
          type="Password"
          placeholder="Confirm Password"
        />
        <input className="inputForm" type="text" placeholder="Phone" />
        <input className="inputForm" type="number" placeholder="Pin" />
        <div className="inputspan">
          <Link className="inputLink" to="/Login">
            <p>Login Now</p>
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

export default Register;
