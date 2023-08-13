import {
  Add,
  ArrowDownward,
  ArrowForward,
  CreditCard,
  CurrencyExchange,
} from "@mui/icons-material";
import "./AccountCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const AccountCard = () => {
  const location = useLocation();
  const [showCreditCardDropdown, setShowCreditCardDropdown] = useState(false);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  const walletId = location.state ? location.state.walletId : "";

  const handleAddButtonClick = () => {
    setShowCreditCardForm(true);
  };

  const handleCancelClick = () => {
    setShowCreditCardForm(false);
  };

  const toggleCreditCardDropdown = () => {
    setShowCreditCardDropdown(!showCreditCardDropdown);
  };

  return (
    <>
      <div className="card">
        {!showCreditCardForm && (
          <div className="AccountInfo">
            <div className="accountBal">
              <p>Total Balance</p>
              <h1 className="balance">$ 2,562.50</h1>
            </div>

            <div className="">
              <Add //THIS IS THE ADD BUTTON
                onClick={toggleCreditCardDropdown && handleAddButtonClick}
                sx={{
                  background: "#f7fae8",
                  color: "#4d6e37",
                  padding: "2vh 2vw",
                  borderRadius: "5px",
                  opacity: "0.8",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        )}

        {showCreditCardForm ? (
          <div className="creditCardForm">
            <form className="credit-card-form">
              <div className="cardInfoc">
                <div className="cardInfoDetails">
                  <label className="cardInfolabels">CARD NUMBER</label>
                  <input
                    className="inputfieldLong"
                    type="text"
                    maxLength="16"
                    placeholder="Enter card number"
                    required
                  />
                </div>
                <div className="cardInfoDetails">
                  <label className="cardInfolabels">CARD NAME</label>
                  <input
                    className="inputfieldLong"
                    type="text"
                    placeholder="Name on the Card"
                    required
                  />
                </div>
              </div>
              <div className="cardOtherInfo">
                <div className="cardOtherInfos">
                  <label className="cardInfolabels">CVV</label>
                  <input
                    className="inputfieldShort"
                    type="text"
                    maxLength="3"
                    placeholder="CVV"
                    required
                  />
                </div>

                <div className="cardOtherInfos">
                  <label className="cardInfolabels">Expiry Date</label>
                  <input
                    className="inputfieldShort"
                    type="text"
                    maxLength="5"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="cardOtherInfos">
                  <label className="cardInfolabels">4-Digit PIN</label>
                  <input
                    className="inputfieldShort"
                    type="password"
                    maxLength="4"
                    placeholder="Enter 4-digit PIN"
                    required
                  />
                </div>
                <div className="cardOtherInfos">
                  <label className="cardInfolabels">Amount</label>
                  <input
                    className="inputfieldShort"
                    type="number"
                    placeholder="Amt to fund"
                    required
                  />
                </div>
              </div>
              <div className="conCardbtn">
                <button className="cardbtn" type="submit">
                  Submit
                </button>
                <button
                  onClick={handleCancelClick}
                  className="cardbtnCancel"
                  type="submit"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <p className="greeting">Good morning, your wallet ID is $John123</p>
            <div className="vl"></div>
            <div className="transBtn">
              <div className="transDiv">
                <ArrowDownward
                  sx={{
                    background: "#ff396f",
                    padding: "1vh",
                    borderRadius: "3px",
                  }}
                />
                <p className="transaction">Withdraw</p>
              </div>
              <div className="transDiv">
                <ArrowForward
                  sx={{
                    background: "#1dcc70",
                    padding: "1vh",
                    borderRadius: "3px",
                  }}
                />
                <p className="transaction">Send</p>
              </div>
              <div className="transDiv">
                <CreditCard
                  sx={{
                    background: "#6236ff",
                    padding: "1vh",
                    borderRadius: "3px",
                  }}
                />
                <p className="transaction">Credit Card</p>
              </div>
              <div className="transDiv">
                <CurrencyExchange
                  sx={{
                    background: "#2d1f3b",
                    padding: "1vh",
                    borderRadius: "3px",
                  }}
                />
                <p className="transaction">Exchange</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AccountCard;
