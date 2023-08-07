import {
    CreditCard,
  PagesOutlined,
  Settings,
  StackedBarChartOutlined,
} from "@mui/icons-material";
import React from "react";
import './Footbar.css'

const Footbar = () => {
  return (
    <>
      <div className="footerBar">
        <div className="footerBarIcons">
          <StackedBarChartOutlined />
          <span className="footerBarIconsText">Charts</span>
        </div>
        <div className="footerBarIcons">
          <CreditCard />
          <span className="footerBarIconsText">Cards</span>
        </div>
        <div className="footerBarIcons">
          <PagesOutlined />
          <span className="footerBarIconsText">Pages</span>
        </div>
        <div className="footerBarIcons">
          <Settings />
          <span className="footerBarIconsText">Settings</span>
        </div>
      </div>
    </>
  );
};

export default Footbar;
