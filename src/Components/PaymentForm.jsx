import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentDetails = {
      name: name,
      email: email,
      address: address,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      paymentMethod: paymentMethod,
    };
    console.log(paymentDetails);

    navigate("/confirm");
  };
  const validateForm = () => {
    if (paymentMethod === "creditCard") {
      return (
        name.length >= 2 &&
        email.length >= 5 &&
        address.length >= 5 &&
        cardNumber.length >= 16 &&
        expiryDate.length >= 6 &&
        cvv.length >= 3
      );
    } else if (paymentMethod === "swish") {
      return (
        name.length >= 2 &&
        email.length >= 5 &&
        address.length >= 5 &&
        cardNumber.length >= 10
      );
    }
  };

  function emptyLocalStorage() {
    localStorage.removeItem("items");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Billing info</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={2}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength={5}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          minLength={5}
          required
        />
      </label>
      {paymentMethod === "creditCard" && (
        <>
          <label>
            Card number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              minLength={16}
              maxLength={16}
              required
            />
          </label>
          <label>
            Expiry date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              minLength={6}
              maxLength={6}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              minLength={3}
              maxLength={3}
              required
            />
          </label>
        </>
      )}
      {paymentMethod === "swish" && (
        <>
          <label>
            Swish number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              minLength={10}
              maxLength={10}
              required
            />
          </label>
        </>
      )}
      <label>
        Payment method:
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="creditCard">Credit card</option>
          <option value="swish">Swish</option>
        </select>
      </label>
      <button
        onClick={emptyLocalStorage}
        type="submit"
        disabled={!validateForm()}
      >
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;
