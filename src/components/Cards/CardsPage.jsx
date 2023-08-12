import React from "react";
import { MasterCard, Verve, VisaCard } from "./Card";
import Topbar from "../Topbar/Topbar";
import Footbar from "../Footbar/Footbar";

const CardsPage = () => {
  return (
    <>
      <div className="container">
        <Topbar />

        <div className="cardReqContainer">
          <p className="cardReqText">
            Click the button below to request for a credit card
          </p>
          <button className="cardReqBtn">Reguest for Card</button>
        </div>
        <VisaCard />
        <MasterCard />
        <Verve />

        <Footbar />
      </div>
    </>
  );
};

export default CardsPage;
