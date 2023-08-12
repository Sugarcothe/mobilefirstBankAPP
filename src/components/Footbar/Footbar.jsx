import {
  CircleTwoTone,
  CreditCardTwoTone,
  DescriptionTwoTone,
  QuestionAnswerTwoTone,
  SettingsTwoTone,
  StackedBarChartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Footbar.css";
import { yellow } from "@mui/material/colors";

const Footbar = () => {
  return (
    <>
      <div className="footerBar">
        <div className="footerBarIcons">
          <StackedBarChartOutlined />
          <span className="footerBarIconsText">Charts</span>
        </div>
        <div className="footerBarIcons">
          <CreditCardTwoTone />
          <span className="footerBarIconsText">Cards</span>
        </div>
        <div className="footerBarIcons">
          <CircleTwoTone sx={{ fontSize: "10vw", color: "#fdc143" }} />
          <span className="footerBarIconsText">Dashbaord</span>
        </div>
        <div className="footerBarIcons">
          <QuestionAnswerTwoTone />
          <span className="footerBarIconsText">Chat</span>
        </div>
        <div className="footerBarIcons">
          <SettingsTwoTone />
          <span className="footerBarIconsText">Settings</span>
        </div>
      </div>
    </>
  );
};

export default Footbar;
