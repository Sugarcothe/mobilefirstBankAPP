import React from "react";
import "./TransactionTable.css";
import jumia from "../../assets/img/jumi.png";
import pematrix from "../../assets/img/pematrix.png";
import wify from '../../assets/img/wifi.png'

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
];

const TransactionTable = () => {
  return (
    <>
      <div className="notificationcontainer">
        <div className="notificationHeader">
          <h1 className="notificationHeader1">Transaction</h1>
          <p className="notificationHeaderText">View More</p>
        </div>

        {tranData.map((d) => (
          <>
            <div className="notificationTable">
              <img className="notificationImg" src={d.img} alt="" />
              <div className="notificationInfo">
                <h1 className="notificationInfoH">{d.header}</h1>
                <p>{d.text}</p>
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
