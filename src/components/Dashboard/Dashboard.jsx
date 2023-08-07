import {
  AccountBalanceWallet,
  Add,
  ArrowDownward,
  ArrowForward,
  CreditCard,
  CurrencyExchange,
  List,
  Person,
} from "@mui/icons-material";
import React from "react";
import Logo from "../assets/Logo/Logo";
import "./Dashboard.css";
import { Card } from "./Card";
import TransactionTable from "./TransationTable.js/TransactionTable";
import Footbar from "../Footbar/Footbar";

const analyticCard = [
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
  {
    text: "Income",
    num: "654",
  },
];
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="topBar">
          <List sx={{ color: "#ffffef" }} />
          <AccountBalanceWallet
            sx={{
              border: "1px solid #ffffef",
              padding: "2vw",
              fontSize: "7vw",
              borderRadius: "50%",
              color: "#ffffef",
            }}
          />
          <Person
            sx={{
              border: "1px solid #ffffef",
              padding: "1vw",
              fontSize: "5vw",
              borderRadius: "50%",
              color: "#ffffef",
            }}
          />
        </div>
        <div className="subcontainer">
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
                    padding: "2.1vh 2vw",
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
          <Card />
          <TransactionTable />

          <Footbar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
