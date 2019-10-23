import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <span className="quantity">{quantity}</span>
    <div className="remove-button">&#10006;</div>
  </div>
);
export default CheckoutItem;