import { List, AccountBalanceWallet, Person, Menu, CreditCard, AccountBalance, PieChart, Money, Savings } from "@mui/icons-material";
import React, { useState } from "react";
import "./Topbar.css";
import john from '../assets/img/john.png'

const Topbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>
      <div className={`topBar ${isNavbarOpen ? "navOpen" : ""}`}>
        <List sx={{ color: "#ffffef" }} onClick={toggleNavbar} />
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
      <div className={`sidebar ${isNavbarOpen ? "sidebarOpen" : ""}`}>
        <div className="sideNav">
          <div className="sideNavProf">
            <img className="sideNavProfPic" src={john} alt="" />
            <p>$John123</p>
          </div>
          <div className="sideNavBal">
            <h1>$ 2,562.50</h1>
          </div>
        </div>
        <div className="navMenu">
          <h1 className="navMenuHeader">Menu</h1>
          <div className="navMenuItem">
            <CreditCard />
            <li>Card</li>
          </div>
          <div className="navMenuItem">
            <AccountBalance />
            <li>Transaction</li>
          </div>
          <div className="navMenuItem">
            <PieChart />
            <li>Transactions</li>
          </div>
          <div className="navMenuItem">
            <Money />
            <li>Financial Analytics</li>
          </div>
          <div className="navMenuItem">
            <Savings />
            <li>Savings</li>
          </div>
        </div>

        {/* Add more list items as needed */}
      </div>
    </>
  );
};

export default Topbar;
