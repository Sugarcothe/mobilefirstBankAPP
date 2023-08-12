import React, { useState } from "react";
import "./TransactionTable.css";
import jumia from "../assets/img/jumi.png";
import pematrix from "../assets/img/pematrix.png";
import wify from "../assets/img/wifi.png";
import tithe from "../assets/img/winners.png";
import paddy from "../assets/img/paddy.png";
import elect from "../assets/img/elect.png";
import Topbar from "../Topbar/Topbar";
import Footbar from "../Footbar/Footbar";

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
];

const TransactionTable = () => {
  const initialTransactionsToShow = 9;
  const [transactionsToShow, setTransactionsToShow] = useState(
    initialTransactionsToShow
  );
  const [expandedTransactionIndex, setExpandedTransactionIndex] =
    useState(null);

  const handleViewMore = () => {
    setTransactionsToShow(transactionsToShow + 9);
  };

  const handleTransactionClick = (index) => {
    if (expandedTransactionIndex === index) {
      setExpandedTransactionIndex(null); // Collapse if already expanded
    } else {
      setExpandedTransactionIndex(index);
    }
  };

  return (
    <>
      <div className="transCont">
        <Topbar />
        <div className="notificationcontainer">
          <div className="notificationHeader">
            <h1 className="notificationHeader1">Transactions</h1>
          </div>

          {tranData.slice(0, transactionsToShow).map((d, index) => (
            <>
              <div
                key={index}
                className="notificationTable"
                onClick={() => handleTransactionClick(index)}
              >
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
              {expandedTransactionIndex === index && (
                <div className="transactionDetails">
                  <p>Issue: {d.header}</p>
                  <p>Desc: {d.text}</p>
                  <p>
                    Amt: <span style={{ color: d.color }}>{d.price}</span>
                  </p>
                  <p>Date: 4/7/2023</p>
                  <p>Time: 12:50pm</p>
                </div>
              )}
            </>
          ))}
          <button className="notificationHeaderText" onClick={handleViewMore}>
            View More
          </button>
        </div>

        <Footbar />
      </div>
    </>
  );
};

export default TransactionTable;
