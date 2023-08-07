import {
    CreditCard,
  CreditCardOffOutlined,
  PagesOutlined,
  Settings,
  SettingsApplicationsOutlined,
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
          <span>Charts</span>
        </div>
        <div className="footerBarIcons">
          <CreditCard />
          <span>Cards</span>
        </div>
        <div className="footerBarIcons">
          <PagesOutlined />
          <span>Pages</span>
        </div>
        <div className="footerBarIcons">
          <Settings />
          <span>Settings</span>
        </div>
      </div>
    </>
  );
};

export default Footbar;
