import React from "react";
import visa from "../assets/img/visacard.png";
import master from "../assets/img/mastercard.png";
import chip from "../assets/img/chip1-removebg-preview.png";

import "./Card.css";

export const VisaCard = () => {
  return (
    <>
      <div className="ccontainer">
        <div className="creditcard">
          <div className="front">
            <div className="frontImg">
              <div className="cardlogos">
                <img className="cardchip" src={chip} alt="visa" />
                <img className="cardlogo" src={master} alt="visa" />
              </div>
              <div className="cardNum">
                <num>5243 2150 8252 6420</num>
              </div>
              <div className="cardInfo">
                <div className="cardholder">
                  <p className="cardholderRole">Card Holder</p>
                  <h1 className="cardholderName">Valentine EZE</h1>
                </div>
                <div className="cardholder">
                  <p className="cardholderRole">VALID TILL</p>
                  <h1 className="cardholderName">10 / 25</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="creditvce">
              <span className="creditcardvce"></span>
              <p>124</p>
            </div>
            <p className="creditbacktext">
              This is a designed card using React, not an actual card for
              transaction.{" "}
            </p>
            <div className="creditcardfooter">
              <p>CUSTOMER SIGN</p>
              <img className="cardlogo" src={master} alt="visa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
