import React from "react";
import { MasterCard, VisaCard } from "./Card";
import Topbar from "../Topbar/Topbar";
import Footbar from "../Footbar/Footbar";

const CardsPage = () => {
  return (
    <>
      <div className="container">
        <Topbar />
        <VisaCard />
        <MasterCard />
        <Footbar />
      </div>
    </>
  );
};

export default CardsPage;
