import {
  Add,
  ArrowDownward,
  ArrowForward,
  CreditCard,
  CurrencyExchange,
} from "@mui/icons-material";
import React from "react";
import "./AccountCard.css";

const AccountCard = () => {
  return (
    <>
      <div className="card">
        <div className="AccountInfo">
          <div className="accountBal">
            <p>Total Balance</p>
            <h1 className="balance">$ 2,562.50</h1>
          </div>

          <div className="">
            <Add
              sx={{
                background: "#f7fae8",
                color: "#4d6e37",
                padding: "2vh 2vw",
                borderRadius: "5px",
                opacity: "0.8",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="vl"></div>
        <div className="transBtn">
          <div className="transDiv">
            <ArrowDownward
              sx={{
                background: "#ff396f",
                padding: "1vh",
                borderRadius: "3px",
              }}
            />
            <p className="transaction">Withdraw</p>
          </div>
          <div className="transDiv">
            <ArrowForward
              sx={{
                background: "#1dcc70",
                padding: "1vh",
                borderRadius: "3px",
              }}
            />
            <p className="transaction">Send</p>
          </div>
          <div className="transDiv">
            <CreditCard
              sx={{
                background: "#6236ff",
                padding: "1vh",
                borderRadius: "3px",
              }}
            />
            <p className="transaction">Credit Card</p>
          </div>
          <div className="transDiv">
            <CurrencyExchange
              sx={{
                background: "#2d1f3b",
                padding: "1vh",
                borderRadius: "3px",
              }}
            />
            <p className="transaction">Exchange</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
