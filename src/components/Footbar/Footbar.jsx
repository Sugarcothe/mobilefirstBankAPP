import {
  CreditCardTwoTone,
  DescriptionTwoTone,
  QuestionAnswerTwoTone,
  SettingsTwoTone,
  StackedBarChartOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Footbar.css";

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
          <DescriptionTwoTone />
          <span className="footerBarIconsText">Pages</span>
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
