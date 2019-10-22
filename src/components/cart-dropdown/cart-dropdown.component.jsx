import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custum-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart-dropdown/cart-dropdown.selector";
const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton> Check Out</CustomButton>
  </div>
);
const mapStateToProps = state => ({
  items: selectCartItems(state)
});
export default connect(
  mapStateToProps,
  null
)(CartDropdown);
