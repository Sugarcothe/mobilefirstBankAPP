import React, { useState } from "react";
import "./TransactionTable.css";
import jumia from "../assets/img/jumi.png";
import pematrix from "../assets/img/pematrix.png";
import wify from "../assets/img/wifi.png";
import tithe from "../assets/img/winners.png";
import paddy from "../assets/img/paddy.png";
import elect from "../assets/img/elect.png";

const tranData = [
  {
    img: jumia,
    header: "JUMIA",
    text: "Shopping",
    price: "-150",
    color: "#fc4c4c",
  },
  {
    img: pematrix,
    header: "PEMATRIX",
    text: "Salary",
    price: "+1500",
    color: "#f7fae8",
  },
  {
    img: wify,
    header: "Wify",
    text: "Food Stuff",
    price: "-100",
    color: "#fc4c4c",
  },
  {
    img: tithe,
    header: "Winners Chapel",
    text: "Tithe",
    price: "-150",
    color: "#fc4c4c",
  },
  {
    img: paddy,
    header: "Electricity",
    text: "Emy's Light Bill",
    price: "150",
    color: "#f7fae8",
  },
  {
    img: elect,
    header: "Mechanic",
    text: "Gear Box",
    price: "-70",
    color: "#fc4c4c",
  },
];

const TransactionTable = () => {
  const initialTransactionsToShow = 3;
  const [transactionsToShow, setTransactionsToShow] = useState(
    initialTransactionsToShow
  );

  const handleViewMore = () => {
    setTransactionsToShow(transactionsToShow + 3); // Increase by the desired number
  };

  return (
    <>
      <div className="notificationcontainer">
        <div className="notificationHeader">
          <h1 className="notificationHeader1">Transactions</h1>
          <button className="notificationHeaderText" onClick={handleViewMore}>
            View More
          </button>
        </div>

        {tranData.slice(0, transactionsToShow).map((d, index) => (
          <>
            <div key={index} className="notificationTable">
              <img className="notificationImg" src={d.img} alt="" />
              <div className="notificationInfo">
                <h1 className="notificationInfoH">{d.header}</h1>
                <p className="notificationInfoT">{d.text}</p>
              </div>
              <p
                style={{
                  color: `${d.color}`,
                  fontSize: "3.5vw",
                  fontWeight: "bolder",
                }}
              >
                ${d.price}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TransactionTable;
