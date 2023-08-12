import {
  List,
  AccountBalanceWallet,
  Person,
  Menu,
  CreditCard,
  AccountBalance,
  PieChart,
  Money,
  Savings,
  Chat,
  VolunteerActivism,
  HomeRepairService,
  Dashboard,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Topbar.css";
import john from "../assets/img/john.png";
import { Link } from "react-router-dom";

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

        <img className="sideNavProfPic" src={john} alt="human" />
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
          <Link className="link" to="/Dashboard">
            <div className="navMenuItem">
              <Dashboard/>
              <li>Dashboard</li>
            </div>
          </Link>
          <Link className="link" to="/CardsPage">
            <div className="navMenuItem">
              <CreditCard />
              <li>Cards</li>
            </div>
          </Link>

          <Link className="link" to="/Transactions">
            <div className="navMenuItem">
              <PieChart />
              <li>Transactions</li>
            </div>
          </Link>

          <Link className="link" to="/CustomerCare">
            <div className="navMenuItem">
              <Chat />
              <li>Customer Care</li>
            </div>
          </Link>

          {/* <Link className="link" to="/Savings">
            <div className="navMenuItem">
              <Savings />
              <li>Savings</li>
            </div>
          </Link> */}

          <Link className="link" to="/Donation">
            <div className="navMenuItem">
              <VolunteerActivism />
              <li>Donation</li>
            </div>
          </Link>

          <Link className="link" to="/Bills">
            <div className="navMenuItem">
              <HomeRepairService />
              <li>Bills</li>
            </div>
          </Link>
        </div>

        {/* Add more list items as needed */}
      </div>
    </>
  );
};

export default Topbar;
