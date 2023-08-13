import React, { useState } from "react";
import "./CreditCardForm.css"; // Import your CSS file for styling

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="credit-card-form-container">
      <form className="credit-card-form" onSubmit={handleSubmit}>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength="16"
          placeholder="Enter card number"
          required
        />

        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          placeholder="CVV"
          required
        />

        <div className="expiry-date-container">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength="5"
            placeholder="MM/YY"
            required
          />
        </div>

        <label>4-Digit PIN</label>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength="4"
          placeholder="Enter 4-digit PIN"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
