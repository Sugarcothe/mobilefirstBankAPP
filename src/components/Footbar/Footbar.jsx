import {
  CircleTwoTone,
  CreditCardTwoTone,
  DescriptionTwoTone,
  PieChartTwoTone,
  QuestionAnswerTwoTone,
  SettingsTwoTone,
  StackedBarChartOutlined,
  VolunteerActivism,
  VolunteerActivismTwoTone,
} from "@mui/icons-material";
import React from "react";
import "./Footbar.css";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Footbar = () => {
  return (
    <>
      <div className="footerBar">
        <Link className="link" to="/Transactions">
          <div className="footerBarIcons">
            <PieChartTwoTone />
            <span className="footerBarIconsText">Transactions</span>
          </div>
        </Link>
        <Link className="link" to="/CardsPage">
          <div className="footerBarIcons">
            <CreditCardTwoTone />
            <span className="footerBarIconsText">Cards</span>
          </div>
        </Link>
        <Link className="link" to="/Dashboard">
          <div className="footerBarIcons">
            <CircleTwoTone sx={{ fontSize: "10vw", color: "#fdc143" }} />
            <span className="footerBarIconsText">Dashbaord</span>
          </div>
        </Link>
        <Link className="link" to="/CustomerCare">
          <div className="footerBarIcons">
            <QuestionAnswerTwoTone />
            <span className="footerBarIconsText">Chat</span>
          </div>
        </Link>
        <Link className="link" to="/Donation">
          <div className="footerBarIcons">
            <VolunteerActivismTwoTone />
            <span className="footerBarIconsText">Donation</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footbar;
