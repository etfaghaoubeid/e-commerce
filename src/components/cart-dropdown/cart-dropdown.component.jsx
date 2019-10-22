import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import { connect } from "react-redux";
const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map(element => (
        <h1>{element.name}</h1>
      ))}
    </div>
    <CustomButton> Check Out</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  items: cartItems
});
export default connect(
  mapStateToProps,
  null
)(CartDropdown);
